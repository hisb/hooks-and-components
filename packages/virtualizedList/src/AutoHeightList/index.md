# AutoHeightList

## 核心问题

当列表项高度不固定（动态高度）时，FixedHeightList 的固定高度假设不再适用。AutoHeightList 通过动态测量每个列表项的实际高度，实现不等高列表项的虚拟化渲染。

## 实现步骤

### 1. 估算高度

- 使用 `estimatedItemHeight` 作为列表项的初始估算高度。
- 初始化所有 item 的位置信息（height 和 offset）。

### 2. 动态测量实际高度

- 每个列表项渲染时传入 `measureRef`，通过 `ResizeObserver` 或 DOM 回调测量实际高度。
- 当高度发生变化时，更新对应 item 的位置信息，并重新计算后续所有 item 的 offset。

### 3. 计算可视区域

- 基于实际测量的高度和 offset，通过二分查找确定可视区域的起止索引。
- 因为每个 item 高度不同，不能用简单除法计算，需要通过 item 的 offset 来查找。

### 4. 渲染优化

- 使用 `useMemo` 缓存可视区域计算结果。
- 仅在 `scrollTop`、`itemPositions` 等依赖变化时重新计算。
