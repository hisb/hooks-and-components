import React, { useCallback, useMemo, useRef, useState } from 'react';

export interface AutoHeightListProps<T = any> {
  /** 列表数据 */
  items: T[];
  /** 估算的单个列表项高度（px），用于初始计算 */
  estimatedItemHeight: number;
  /** 容器高度（px） */
  containerHeight: number;
  /** 渲染单个列表项，同时接收一个 ref 用于测量实际高度 */
  renderItem: (
    item: T,
    index: number,
    measureRef: React.RefCallback<HTMLElement>,
  ) => React.ReactNode;
  /** 超出可视区域的 buffer 数量，默认 3 */
  overscan?: number;
  /** 自定义外层容器 className */
  className?: string;
  /** 自定义外层容器 style */
  style?: React.CSSProperties;
  /** 获取列表项的 key */
  getItemKey?: (item: T, index: number) => string | number;
}

interface ItemPosition {
  height: number;
  offset: number;
}

function AutoHeightList<T>({
  items,
  estimatedItemHeight,
  containerHeight,
  renderItem,
  overscan = 3,
  className,
  style,
  getItemKey,
}: AutoHeightListProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  // 存储每个 item 的实际位置信息
  const [itemPositions, setItemPositions] = useState<ItemPosition[]>(() =>
    items.map((_, i) => ({
      height: estimatedItemHeight,
      offset: i * estimatedItemHeight,
    })),
  );

  // 当 item 数量变化时重新初始化
  const prevItemsLen = useRef(items.length);
  if (prevItemsLen.current !== items.length) {
    prevItemsLen.current = items.length;
    // 同步更新 positions，但保留已测量的高度
    const newPositions: ItemPosition[] = [];
    let offset = 0;
    for (let i = 0; i < items.length; i++) {
      const height = itemPositions[i]?.height ?? estimatedItemHeight;
      newPositions.push({ height, offset });
      offset += height;
    }
    if (JSON.stringify(newPositions) !== JSON.stringify(itemPositions)) {
      setItemPositions(newPositions);
    }
  }

  const totalHeight = useMemo(() => {
    const last = itemPositions[itemPositions.length - 1];
    return last ? last.offset + last.height : 0;
  }, [itemPositions]);

  // 二分查找 scrollTop 对应的起始索引
  const findStartIdx = useCallback(
    (scrollTop: number): number => {
      let low = 0;
      let high = itemPositions.length - 1;
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midOffset = itemPositions[mid].offset;
        if (midOffset < scrollTop) {
          low = mid + 1;
        } else if (midOffset > scrollTop) {
          high = mid - 1;
        } else {
          return mid;
        }
      }
      return Math.max(0, high);
    },
    [itemPositions],
  );

  const visibleRange = useMemo(() => {
    const startIdx = Math.max(0, findStartIdx(scrollTop) - overscan);
    let endOffset = scrollTop + containerHeight;
    let endIdx = startIdx;
    while (
      endIdx < itemPositions.length &&
      itemPositions[endIdx].offset < endOffset
    ) {
      endIdx++;
    }
    endIdx = Math.min(itemPositions.length, endIdx + overscan);
    return { startIdx, endIdx };
  }, [scrollTop, containerHeight, itemPositions, overscan, findStartIdx]);

  const visibleItems = useMemo(() => {
    return items.slice(visibleRange.startIdx, visibleRange.endIdx);
  }, [items, visibleRange]);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  }, []);

  // 测量回调：当 item 挂载后测量实际高度并更新位置缓存
  const createMeasureRef = useCallback(
    (index: number): React.RefCallback<HTMLElement> => {
      return (node: HTMLElement | null) => {
        if (node) {
          const rect = node.getBoundingClientRect();
          const actualHeight = rect.height;
          const currentHeight = itemPositions[index]?.height ?? estimatedItemHeight;
          if (actualHeight && actualHeight !== currentHeight) {
            setItemPositions((prev) => {
              const next = [...prev];
              const heightDiff = actualHeight - next[index].height;
              next[index] = {
                ...next[index],
                height: actualHeight,
              };
              // 更新后续 item 的 offset
              for (let i = index + 1; i < next.length; i++) {
                next[i] = {
                  ...next[i],
                  offset: next[i].offset + heightDiff,
                };
              }
              return next;
            });
          }
        }
      };
    },
    [itemPositions, estimatedItemHeight],
  );

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        height: containerHeight,
        overflowY: 'auto',
        position: 'relative',
        ...style,
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map((item, i) => {
          const actualIndex = visibleRange.startIdx + i;
          const pos = itemPositions[actualIndex];
          const key =
            getItemKey?.(item as T, actualIndex) ?? actualIndex;
          return (
            <div
              key={key}
              style={{
                position: 'absolute',
                top: pos?.offset ?? actualIndex * estimatedItemHeight,
                left: 0,
                right: 0,
              }}
            >
              {renderItem(item as T, actualIndex, createMeasureRef(actualIndex))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AutoHeightList;
