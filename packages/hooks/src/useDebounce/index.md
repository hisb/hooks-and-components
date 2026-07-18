# useDebounce
防抖函数：无论用户是否持续点击，只在最后一次点击后延迟时间到了，才会调用原始函数。

使用方法：
```tsx
import useDebounce from './index';

export default function ComponentWithDebounce() {
  const debouncedFn = useDebounce(() => {
    console.log('Debounced function called');
  }, 1000);

  return (
    <div>
      <button onClick={() => debouncedFn()}>Click me</button>
    </div>
  );
}
```