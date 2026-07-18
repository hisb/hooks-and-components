import { useRef } from 'react';

export default function useLasted<T>(value: T) {
  const lastedRef = useRef<T>(value);
  lastedRef.current = value;
  return lastedRef;
}