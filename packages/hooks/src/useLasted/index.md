# useLasted
使用 useRef 实现一个简单的 hook，用于始终获取最新的值。也可用于获取上一次渲染的值的场景。
使用场景：
- 当您需要在组件中使用上一次渲染的值时，例如在动画中使用上一次渲染的位置
- 但这个hook定义的字段不能驱动视图的更新，需要通过state的更新达到视图更新的效果
- demo中因闭包引起的拿不到最新值的问题可以采用setState通过获取历史state的方式解决

```tsx
import useLasted from './index';
import { useState, useEffect } from 'react';

export default function Component() {
  const [count, setCount] = useState(0);
  const lastedRef = useLasted(count);

  useEffect(() => {
    const timer = setInterval(() => {
      // console.log(lastedRef.current);
      // setCount(count => count + 1);
      setCount(++lastedRef.current);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      <p>lastedCount: {lastedRef.current}</p>
    </div>
  );
}
```
