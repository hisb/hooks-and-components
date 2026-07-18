# createUpdateEffectHook
创建一个更新的 useEffect 钩子，用于在组件更新时执行副作用。忽略首次更新，只在后续更新时执行。
支持useEffect、useLayoutEffect。

```tsx
import { useEffect, useState, useLayoutEffect } from 'react';
import createUpdateEffectHook from './index';
const useUpdateEffect = createUpdateEffectHook(useEffect);
const useUpdateLayoutEffect = createUpdateEffectHook(useLayoutEffect);

export default function Component() {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => {
    console.log('useUpdateEffect');
  }, [count]);

  useUpdateLayoutEffect(() => {
    console.log('useUpdateLayoutEffect');
  }, [count]);

  return <div>
    count: {count}
    <button onClick={() => setCount(count + 1)}>click</button>
  </div>
}
``` 