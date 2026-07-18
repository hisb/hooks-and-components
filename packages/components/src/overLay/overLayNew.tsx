import React, { useState } from 'react';
import { OverLay } from './Component';
import { ChilrenComponent, OverLayProps } from './type';
import { overlayManager, OverlayHandle } from './overlayManager';
import { useMemrizedFn } from '@hooks/hooks';

/**
 * 命令式打开弹窗（Portal 模式）
 *
 * @example
 * const modal = showOverLay(<Content />, { title: '加载中...' });
 * modal.update({ title: '已加载' });           // 命令式更新，无需 id
 * const result = await modal.promise;           // 等待 onOk
 */
export const showOverLay = (
  Component: ChilrenComponent,
  options: OverLayProps = {},
): OverlayHandle => {
  return overlayManager.open(Component, options);
};

/**
 * 声明式弹窗（Hook 模式）
 *
 * 使用 useOverLay 获取 toggle + OverLay 组件，
 * 渲染在调用方的 JSX 中，天然在 React 树内。
 */
export const useOverLay = (options: OverLayProps = {}) => {
  const [visible, setVisible] = useState(false);
  return {
    toggle: useMemrizedFn(() => setVisible((prev) => !prev)),
    OverLay: useMemrizedFn(
      ({ children, ...overLayProps }: { children: React.ReactNode } & OverLayProps) => (
        <OverLay
          {...options}
          {...overLayProps}
          open={visible}
          onCancel={(arg: any) => {
            options.onCancel?.(arg);
            setVisible(false);
          }}
          onOk={(arg: any) => {
            if (options.onOk) {
              options.onOk?.(arg);
            } else {
              setVisible(false);
            }
          }}
          onClose={(e: any) => {
            options.onCancel?.(e);
            setVisible(false);
          }}
        >
          {children}
        </OverLay>
      ),
    ),
  };
};
