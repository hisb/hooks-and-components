import { useRef, useCallback, useMemo } from 'react';

export default function useMemrizedFn<T>(fn: T) {
  if(typeof fn !== 'function') {
    throw new Error(`useMemrizedFn expected parameter is a function, got ${typeof fn}`);
  }
  // 是在 render 阶段 直接修改 ref 。React 并发模式下可能出现：render 执行了但被丢弃（discarded），下次又重新 render。如果直接赋值，ref 可能残留了被丢弃那次 render 的 fn
  // 但如果 fn 依赖了 props/state，被丢弃 render 中的 fn_A 可能闭包了旧的变量值，这就确实有风险
  const memrizedFn = useRef(fn);
  // memrizedFn.current = fn;
  // 这行优化的意义也不太大，因为上面的情况理论上会有问题，但是实际应用中发生的概率极小。
  memrizedFn.current = useMemo(() => fn, [fn]);

  // 这里可以直接用ref来实现，ref只存一次，保证容器函数一直不变，变的是里面的ref的函数。大差不差
  const returnFn = useCallback(function(...args: any[]) {
    return memrizedFn.current.apply(this as any, args);
  }, []);

  return returnFn;
}
