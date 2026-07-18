# useThrottle
useThrottle 是一个用于节流函数的 hook。
它接收一个函数和一个延迟时间作为参数，返回一个节流后的函数。
节流后的函数在调用时，只有在上一次调用后延迟时间到了，才会调用原始函数。
如果在延迟时间内再次调用，不会调用原始函数。

```tsx
import useThrottle from './index';

export default function ComponentWithThrottle() {

  const throttledFn = useThrottle(() => {
    console.log('Throttled function called');
  }, 1000);

  return (
    <div>
      <button onClick={() => throttledFn()}>Click me</button>
    </div>
  );
}
```