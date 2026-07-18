# hookCreate
```tsx
import { Tick, useState, resetIndex, useEffect as useEffectHook, useMemo as useMemoHook, useCallback as useCallbackHook, useReducer as useReducerHook } from './index';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const ChildrenComponent = (props) => {
  const [count, setCount] = useState(0);
  const [str, setStr] = useState('hello');

  useEffectHook(() => {
    console.log('useEffectHook', count, str);

    return () => {
      console.log('useEffectHook cleanup', count, str);
    }
  }, [count, str]);
  
  const memoStr = useMemoHook(() => {
    return count + str;
  }, [count, str]);

  const callback = useCallbackHook(() => {
    console.log('useCallbackHook', count, str);
  }, [count, str]);

  const [reducerState, reducerDispatch] = useReducerHook((state, action) => {
    switch(action) {
      case 'inc':
        return state + 1;
      case 'dec':
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return (
    <div>
      <p>count: {count}</p>
      <p>str: {str}</p>
      <p>
        memoStr: {memoStr}
      </p>
      <div>
        <button onClick={() => {
          setCount(count + 1);
          setCount(p => p + 2);
        }}>
          count++
        </button>
        <button onClick={() => setStr('world')}>str change</button>
      </div>
      <div>
        <button onClick={() => reducerDispatch('inc')} style={{display: 'inline-block'}}>+</button>
        <p style={{display: 'inline-block'}}>{reducerState}</p>
        <button onClick={() => reducerDispatch('dec')} style={{display: 'inline-block'}}>-</button>
      </div>
    </div>
  );
}

export default function Component() {
  const containerRef = useRef(null);

  const reRender = (root) => {
    root.render(<ChildrenComponent />);
  }

  useEffect(() => {
    if (!containerRef.current) {
      return;
    } 
    const root = ReactDOM.createRoot(containerRef.current);
    reRender(root);
    Tick.render = reRender.bind(null, root);
  }, []);


  return (
    <div ref={containerRef}></div>
  );
}
```

✨ 说明

采用数组的形式模拟实现基础hooks。
真正实现的hooks，是采用单链表的形式来管理所有的hook，其中采用next字段来串连所有的hook。

- 自定义了5个基本的hook：useState、useMemo、useCallback、useReducer、useEffect
- demo组件重新创建了一个dom元素作为容器根节点，render一个子组件，来模拟react根节点的重新render来更新子组件中的数据。