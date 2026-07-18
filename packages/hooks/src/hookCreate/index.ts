/**
 * hooks 定义一个缓存队列，useState就存值，useEffect就存依赖和副作用函数
 * 定义一个简单的事件调度器
 *    在setState时就将更新函数push到时间调度器中并执行更新。
 *    还要重置当前hook的索引并清空执行栈,重新render
 */

type stateType = string | number | boolean | object;

interface HookItem<T extends stateType> {
  state?: T;
  deps?: any[];
  effect?: null | (() => void);
}

const queue: HookItem<stateType>[] = [], depsMemo: any[] = [];
let index = 0;
export const resetIndex = () => {
  index = 0;;
}

// 事件调度器
export const Tick = {
  list: [] as (() => void)[],
  add: function(callback: () => void) {
    this.list.push(callback);
  },
  nextTick: function(callback: () => void) {
    this.add(callback);
    Promise.resolve().then(() => {
      if(this.list.length === 0){
        return;
      }
      this.list.forEach((item) => item());
      index = 0;
      this.list = [];
      this.render && this.render();
    });
  },
  render: null
};

export function useState(initialState: any) {
  if (queue[index] === undefined) {
    queue[index] = typeof initialState === 'function' ? initialState() : initialState;
  }
  const currentIndex = index;
  function setState(newState: stateType) {
    const nextState = typeof newState === 'function' ? newState(queue[currentIndex]) : newState;

    Tick.nextTick(() => {
      queue[currentIndex] = nextState;
    });
  }
  return [queue[index++], setState];
}

export function useEffect(effect: any, deps: any[]) {
  if(typeof effect !== 'function'){
    throw new Error('effect must be a function');
  }
  if(!Array.isArray(deps)){
    throw new Error('deps must be an array');
  }
  const changed = deps.some((dep, i) => {
    return dep !== queue[index]?.deps?.[i];
  });
  if(changed) {
    const prevEffect = queue[index]?.effect;  
    const currentIndex = index;
    setTimeout(() => {
      if(prevEffect) {
        prevEffect();
      }
      const result = effect();
      if(result && typeof result === 'function') {
        queue[currentIndex] = {...queue[currentIndex], deps, effect: result};
      }
    });
  }
  queue[index++] = { deps, effect: null };
}

export const useMemo = (factory: () => any, deps: any[]) => {
  if(typeof factory !== 'function'){
    throw new Error('factory must be a function');
  }
  if(!Array.isArray(deps)){
    throw new Error('deps must be an array');
  }
  const changed = deps.some((dep, i) => {
    return dep !== queue[index]?.deps?.[i];
  });
  if(changed) {
    queue[index] = { deps, state: factory() };
  }
  return queue[index++].state;
}

export const useCallback = (factory: () => any, deps: any[]) => {
  return useMemo(() => factory, deps);
}

export const useReducer = (reducer: (state: stateType, action: any) => stateType, initialState: stateType) => {
  const [state, setState] = useState(initialState);
  const update = (state: stateType, action: any) => {
    const nextState = reducer(state, action);
    setState(nextState);
  }
  const dispatch = update.bind(null, state)
  return [state, dispatch];
}
