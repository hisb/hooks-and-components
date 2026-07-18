# FixedHeightList

## 核心问题

当列表数据量非常大（例如上万条）时，如果一次性渲染所有 DOM 节点，会导致严重的性能问题：页面卡顿、内存占用过高、滚动不流畅。虚拟列表的核心思想是**只渲染可视区域内的列表项**，从而实现无论数据量多大，DOM 节点数保持在一个可控的范围内。

## 实现步骤

### 1. 建立滚动容器

- 创建一个具有固定高度 `containerHeight` 的外层容器，设置 `overflow-y: auto`，使其成为滚动容器。
- 在容器内部创建一个占位层，其高度等于 `items.length * itemHeight`（所有列表项的总高度），用于撑开滚动条，模拟出一个"完整列表"的效果。cult
- 占位层使用 `position: relative`，以便其内部的列表项可以基于它进行绝对定位。

### 2. 监听滚动事件

- 监听外层容器的 `onScroll` 事件，实时获取当前滚动位置 `scrollTop`。
- `scrollTop` 的变化将作为触发可视区域重新计算的唯一信号。

### 3. 计算可视区域范围

由于每个列表项高度固定（`itemHeight`），可视区域的起止索引可以直接通过公式计算，不需要遍历：

- **起始索引**：`Math.floor(scrollTop / itemHeight)`，即当前滚动了多少个完整的 item。
- **可见数量**：`Math.ceil(containerHeight / itemHeight)`，即容器高度能容纳多少个 item。
- **结束索引**：`起始索引 + 可见数量`。

### 4. 引入缓冲区（overscan）

如果仅渲染严格可视区域内的 item，快速滚动时可能出现短暂的白屏（新 item 还未渲染）。解决方案是引入 `overscan` 参数：

- 在起始索引往前多渲染 `overscan` 个 item。
- 在结束索引往后多渲染 `overscan` 个 item。
- 这样在可视区域上下各有一段"预渲染"的缓冲区，滚动时用户几乎感觉不到延迟。
- `overscan` 默认值设为 3，这是一个经验和性能之间的平衡值。

最终的起止索引：
- `startIdx = max(0, floor(scrollTop / itemHeight) - overscan)`
- `endIdx = min(items.length, ceil(scrollTop / itemHeight) + visibleCount + overscan)`

### 5. 切片渲染可视 item

- 根据计算出的 `startIdx` 和 `endIdx`，对原始数据 `items` 做 `slice` 操作，得到当前需要渲染的 item 子集。
- 每个子 item 使用**绝对定位**，其 `top` 值为 `actualIndex * itemHeight`，精确放置在占位层中的正确位置。
- 设置每个 item 的高度为 `itemHeight`，宽度撑满（`left: 0, right: 0`）。
- 通过 `getItemKey` 或索引作为 React `key`，确保 React 能正确复用 DOM 节点。

### 6. 性能优化

- **useMemo**：`visibleRange` 和 `visibleItems` 的计算依赖于 `scrollTop`、`itemHeight`、`containerHeight` 等。使用 `useMemo` 缓存，仅在依赖变化时重新计算。
- **useCallback**：`handleScroll` 使用 `useCallback` 避免每次渲染都创建新函数。
- **避免不必要的重渲染**：滚动过程中只有 `scrollTop` 变化，通过精确的依赖控制，其他 props（如 `renderItem`、`items`）不变时不会触发无关计算。

## 整体流程

```
用户滚动
  → onScroll 触发 → 更新 scrollTop
  → useMemo 重新计算 visibleRange（startIdx, endIdx）
  → useMemo 重新计算 visibleItems（slice 切片）
  → React 对比渲染：
      新进入可视区的 item → 挂载
      离开可视区的 item   → 卸载
      仍在可视区的 item   → 复用
```

## 关键参数说明

| 参数 | 说明 |
|------|------|
| `itemHeight` | 每个列表项的高度，必须精确。这是定高虚拟列表性能优势的来源 |
| `containerHeight` | 外层可视容器的高度，决定了同时可见的 item 数量 |
| `overscan` | 缓冲区大小，值越大白屏概率越低，但 DOM 节点越多 |
| `renderItem` | 渲染函数，由使用者决定每个 item 的内容 |
| `getItemKey` | 可选，用于生成稳定的 React key，避免不必要的卸载/挂载 |
