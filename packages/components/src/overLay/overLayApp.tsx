import React, { useState, useRef, useCallback } from 'react';
import { OverLay } from './Component';
import { OverLayProps } from './type';

/**
 * 方案A：基于 React 声明式渲染的轻量方案
 *
 * 原理：弹窗通过 overlay() 在 JSX 中声明式渲染，天然在 React 树内，
 * 内容组件的 props 直接由外层 state 驱动，数据变化自动响应。
 *
 * 无需外部 store、useSyncExternalStore、createPortal、OverlayContainer。
 *
 * @example
 * function MyPage() {
 *   const [user, setUser] = useState(null);
 *   const { overlay, show, update } = useAppOverLay({ type: 'drawer', title: '详情' });
 *
 *   return (
 *     <>
 *       <Button onClick={show}>打开</Button>
 *       // user 变化 → 弹窗内容自动更新
 *       {overlay(<UserDetail data={user} />)}
 *     </>
 *   );
 * }
 */
export function useAppOverLay(defaultOptions: OverLayProps = {}) {
  const [visible, setVisible] = useState(false);
  const [overlayProps, setOverlayProps] = useState(defaultOptions);

  const resolveRef = useRef<((v: any) => void) | null>(null);

  const close = useCallback((v?: any) => {
    resolveRef.current?.(v);
    resolveRef.current = null;
    setVisible(false);
  }, []);

  /** 命令式打开弹窗 */
  const show = useCallback((): Promise<any> => {
    return new Promise((resolve) => {
      resolveRef.current = resolve;
      setVisible(true);
    });
  }, []);

  /** 更新弹窗属性（title、width 等），外部数据变化时调用 */
  const update = useCallback((config: Partial<OverLayProps>) => {
    setOverlayProps((prev: OverLayProps) => ({ ...prev, ...config }));
  }, []);

  /**
   * 渲染弹窗（放在 JSX 中）
   * @param children 内容组件，props 由外层 state 传入，自动响应数据变化
   */
  const overlay = useCallback(
    (children: React.ReactNode) => (
      <OverLay
        {...overlayProps}
        open={visible}
        onCancel={(arg: any) => {
          overlayProps.onCancel?.(arg);
          close(arg);
        }}
        onOk={(arg: any) => {
          if (overlayProps.onOk) {
            overlayProps.onOk(arg, setVisible);
            return;
          }
          close(arg);
        }}
        afterClose={() => {
          overlayProps.afterClose?.();
          close();
        }}
        onClose={(...args: any[]) => {
          overlayProps.onCancel?.call(null, args?.[0]);
          close();
        }}
        update={update}
      >
        {children}
      </OverLay>
    ),
    [visible, overlayProps, update],
  );

  return { overlay, show, close, update, visible } as const;
}
