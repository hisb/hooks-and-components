import { useRef, useEffect, useLayoutEffect } from 'react';
import useMemrizedFn from '../useMemrizedFn';

const createUpdateEffectHook = (hookType: typeof useEffect | typeof useLayoutEffect) => (fn: () => void, deps: any[]) => {
  const mountedRef = useRef(false);

  hookType(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  hookType(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    fn();
  }, deps);
};

export const useUpdateEffect = createUpdateEffectHook(useEffect);
export const useUpdateLayoutEffect = createUpdateEffectHook(useLayoutEffect);

export default createUpdateEffectHook;
