# useAsyncMemo

创建一个延迟支持的 useMemo，利用 `setTimeout` 把**同步重型计算丢到下一个宏任务**，避免阻塞当前渲染周期。

`sliced: true` 模式下，工厂函数返回 Generator，配合 `requestIdleCallback` 将计算切成时间片，每片之间让出主线程，计算过程也不阻塞 UI 交互。

## 示例：质数查找（trial division，天然耗时数秒）

```tsx
import { useState } from 'react';
import useAsyncMemo from './index';

// ===== 普通工厂：sliced: false 时调用，一次性跑完 =====
function findPrimes(limit: number) {
  const start = performance.now();
  let count = 0;
  for (let n = 2; n <= limit; n++) {
    let isPrime = true;
    for (let d = 2; d * d <= n; d++) {
      if (n % d === 0) { isPrime = false; break; }
    }
    if (isPrime) count++;
  }
  return { count, max: limit, cost: performance.now() - start };
}

// ===== Generator 工厂：sliced: true 时调用，每 500 个数 yield 一次 =====
function* findPrimesSliced(limit: number) {
  const start = performance.now();
  let count = 0;
  for (let n = 2; n <= limit; n++) {
    let isPrime = true;
    for (let d = 2; d * d <= n; d++) {
      if (n % d === 0) { isPrime = false; break; }
    }
    if (isPrime) count++;
    if (n % 500 === 0) yield; // 每 500 个数把控制权交还浏览器
  }
  return { count, max: limit, cost: performance.now() - start };
}

const Demo = () => {
  const [limit, setLimit] = useState('50000');
  const num = Number(limit) || 0;
  const [counter, setCounter] = useState(0);
  const [sliced, setSliced] = useState(true);

  const { value, loading } = useAsyncMemo(
    sliced
      ? () => findPrimesSliced(num)     // Generator 工厂
      : () => findPrimes(num),           // 普通工厂
    [num, sliced],
    { sliced },
  );

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif', maxWidth: 650 }}>
      <h2>useAsyncMemo 演示：查找 2~n 内的质数个数</h2>

      {/* ===== 控制面板 ===== */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
        <label>
          查找上限 n：
          <input
            type="number"
            value={limit}
            min={0}
            max={200000}
            onChange={(e) => setLimit(e.target.value)}
            style={{ width: 80, marginLeft: 6 }}
          />
        </label>

        {/* 切片模式开关 */}
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={sliced}
            onChange={(e) => setSliced(e.target.checked)}
          />
          sliced 模式（时间切片，不阻塞）
        </label>
      </div>

      {/* ===== 计数器：验证 UI 是否被阻塞 ===== */}
      <button
        onClick={() => setCounter((c) => c + 1)}
        style={{ padding: '8px 20px', marginBottom: 16, fontSize: 16 }}
      >
        疯狂连点验证流畅度: {counter}
      </button>
      <p style={{ color: '#888', fontSize: 12, marginTop: -10 }}>
        {sliced
          ? '切片模式：计算期间按钮依然即时响应'
          : '未切片：计算期间按钮卡死，计算完成后才更新'}
      </p>

      {/* ===== 结果展示 ===== */}
      <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
        {loading ? (
          <span style={{ color: '#fa8c16' }}>
            ⏳ 计算中（{sliced ? 'UI 完全可交互' : '主线程被阻塞'}）...
          </span>
        ) : value ? (
          <span>
            2 ~ {value.max} 共有 {value.count} 个质数，耗时 {value.cost.toFixed(0)} ms
            {' | '}
            {value.cost < 50 ? '⚡ 很快' : value.cost < 500 ? '🐌 有点慢' : '🐢 很慢'}
          </span>
        ) : (
          <span>输入 n 开始计算</span>
        )}
      </div>
    </div>
  );
};

export default Demo;
```

**操作验证**：输入 100000，切换到 `sliced: false` 点击查找 → 按钮完全卡死。勾选 sliced → 按钮全程流畅响应。

## 工作原理

### 默认模式（`sliced: false`）

1. 依赖变化 → `setTimeout(factory, 0)` 将计算推迟到下一个宏任务
2. UI 优先渲染，loading 状态立即可见
3. 宏任务执行 `factory()`，**此时主线程阻塞**
4. 计算完成后更新 value，loading = false

### 时间切片模式（`sliced: true`）

1. 依赖变化 → 启动 `requestIdleCallback` 循环
2. 每个空闲期执行 Generator 的 `next()`，每片计算量可控
3. 当前片用尽空闲时间 → **交还主线程给浏览器**（处理点击、渲染）
4. 下一个空闲期继续下一片
5. Generator 完成 → 回填 value，loading = false
6. 依赖变化时取消旧任务，开始新计算

## API

```ts
useAsyncMemo<T>(
  factory: () => T,                    // sliced: false，同步工厂
  dependencies: unknown[],
  options?: { sliced?: boolean }
)

// sliced: true 时，factory 需返回 Generator
useAsyncMemo<T>(
  function* () { /* 用 yield 分片 */ },
  dependencies,
  { sliced: true }
)
```

## 适用场景

- 大型列表的过滤 / 排序
- 复杂数据格式转换
- 图表数据的聚合计算
- 任何在 `useMemo` 中耗时超过 16ms（一帧预算）的运算
