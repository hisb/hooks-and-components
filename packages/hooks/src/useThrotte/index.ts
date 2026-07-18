import { useRef } from 'react';
import useMemrizedFn from '../useMemrizedFn';

export default function useThrottle<T extends (...args: any[]) => any>(fn: T, delay: number): T {
  const lastTimeRef = useRef<number>(0);

  const handler = useMemrizedFn((...args: Parameters<T>) => {
    const _now = Date.now();
    if(_now - lastTimeRef.current >= delay) {
      lastTimeRef.current = _now;
      fn(...args);
    }

  });

  return handler as unknown as T;
}