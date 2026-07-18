import { useRef } from 'react';
import useMemrizedFn from '../useMemrizedFn';

export default function useDebounce<T extends (...args: any[]) => any>(fn: T, delay: number): T {
  const lastTimeRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handler = useMemrizedFn((...args: Parameters<T>) => {
    const _now = Date.now();
    if(_now - lastTimeRef.current < delay) {
      timerRef.current && clearTimeout(timerRef.current);
    }

    lastTimeRef.current = _now;
    timerRef.current = setTimeout(() => {
      fn(...args);
      timerRef.current = null;
    }, delay);
  });
  return handler as T;
}