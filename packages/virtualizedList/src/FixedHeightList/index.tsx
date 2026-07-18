import React, { useCallback, useMemo, useRef, useState } from 'react';

export interface FixedHeightListProps<T = any> {
  /** 列表数据 */
  items: T[];
  /** 单个列表项高度（px） */
  itemHeight: number;
  /** 容器高度（px） */
  containerHeight: number;
  /** 渲染单个列表项 */
  renderItem: (item: T, index: number) => React.ReactNode;
  /** 超出可视区域的 buffer 数量，默认 3 */
  overscan?: number;
  /** 自定义外层容器 className */
  className?: string;
  /** 自定义外层容器 style */
  style?: React.CSSProperties;
  /** 获取列表项的 key */
  getItemKey?: (item: T, index: number) => string | number;
}

function FixedHeightList<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 3,
  className,
  style,
  getItemKey,
}: FixedHeightListProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const totalHeight = items.length * itemHeight;

  const visibleRange = useMemo(() => {
    const startIdx = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    const endIdx = Math.min(
      items.length,
      Math.ceil(scrollTop / itemHeight) + visibleCount + overscan,
    );
    return { startIdx, endIdx };
  }, [scrollTop, itemHeight, containerHeight, items.length, overscan]);

  const visibleItems = useMemo(() => {
    return items.slice(visibleRange.startIdx, visibleRange.endIdx);
  }, [items, visibleRange]);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  }, []);

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
          const key =
            getItemKey?.(item as T, actualIndex) ?? actualIndex;
          return (
            <div
              key={key}
              style={{
                position: 'absolute',
                top: actualIndex * itemHeight,
                left: 0,
                right: 0,
                height: itemHeight,
              }}
            >
              {renderItem(item as T, actualIndex)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FixedHeightList;
