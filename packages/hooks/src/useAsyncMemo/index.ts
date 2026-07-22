/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2026-07-22 17:10:03
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2026-07-22 21:08:58
 * @FilePath: /demo/custom-hooks/packages/hooks/src/useAsyncMemo/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState, useEffect, useRef } from 'react';

interface UseAsyncMemoOptions {
  /** 启用时间切片模式，factory 需返回 Generator，每次 yield 让出主线程 */
  sliced?: boolean;
}

export default function useAsyncMemo<T>(
  factory: () => T,
  dependencies: unknown[],
  options?: UseAsyncMemoOptions,
) {
  const [value, setValue] = useState<T>();
  const taskIdRef = useRef(0);
  const isMountedRef = useRef(true);
  const [loading, setLoading] = useState(true);
  const cancelRef = useRef<(() => void) | null>(null);

  const sliced = options?.sliced ?? false;

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const currentTaskId = ++taskIdRef.current;

    // 取消上一次未完成的切片任务
    cancelRef.current?.();
    setLoading(true);

    if (sliced) {
      // ===== 时间切片模式：Generator + requestIdleCallback =====
      const generator = factory() as Generator<undefined, T>;

      const runSlice = (deadline?: IdleDeadline) => {
        if (currentTaskId !== taskIdRef.current || !isMountedRef.current) {
          setLoading(false);
          return;
        }

        try {
          // 每片最多执行 5ms，交还控制权给浏览器
          const sliceStart = performance.now();
          let result = generator.next();
          while (!result.done) {
            const shouldPause = deadline
              ? deadline.timeRemaining() <= 0           // requestIdleCallback：用空闲时间判断
              : performance.now() - sliceStart > 5;      // setTimeout 降级：超 5ms 暂停
            if (shouldPause) break;
            result = generator.next();
          }

          if (currentTaskId !== taskIdRef.current) {
            setLoading(false);
            return;
          }

          if (result.done) {
            setValue(result.value);
            setLoading(false);
          } else {
            // 还有剩余，等下一个空闲期继续
            scheduleSlice();
          }
        } catch (err) {
          if (currentTaskId === taskIdRef.current) {
            setLoading(false);
          }
          throw err;
        }
      };

      const scheduleSlice = () => {
        if (typeof requestIdleCallback !== 'undefined') {
          const id = (requestIdleCallback as (cb: IdleRequestCallback) => number)(runSlice);
          cancelRef.current = () => (cancelIdleCallback as (id: number) => void)(id);
        } else {
          const id = window.setTimeout(() => runSlice(), 0);
          cancelRef.current = () => clearTimeout(id);
        }
      };

      scheduleSlice();
    } else {
      // ===== 默认模式：setTimeout 延迟执行 =====
      const timer = setTimeout(() => {
        if (currentTaskId !== taskIdRef.current || !isMountedRef.current) {
          setLoading(false);
          return;
        }
        const raw = factory();
        // 兼容 Generator 工厂：自动迭代到底
        let result: T;
        if (
          raw !== null &&
          typeof raw === 'object' &&
          typeof (raw as any).next === 'function'
        ) {
          const gen = raw as unknown as Generator;
          let step = gen.next();
          while (!step.done) step = gen.next();
          result = step.value;
        } else {
          result = raw as T;
        }
        if (currentTaskId === taskIdRef.current) {
          setValue(result);
        }
        setLoading(false);
      }, 0);

      cancelRef.current = () => clearTimeout(timer);
    }

    return () => {
      cancelRef.current?.();
    };
  }, dependencies);

  return { value, loading };
}
