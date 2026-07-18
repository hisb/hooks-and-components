import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useSyncExternalStore } from 'react';
import { OverLay } from './Component';
import { overlayManager, OverlayInstance } from './overlayManager';

/**
 * 单个弹窗实例组件
 * 每个 overlay 实例有独立的 visible 和 attributes 状态
 */
const OverlayInstanceRender: React.FC<{ instance: OverlayInstance }> = ({ instance }) => {
  const [visible, setVisible] = useState(true);
  const [attributes, setAttributes] = useState(instance.options);

  const { options, content } = instance;
  const { onCancel, onOk, destroyOnHidden = true } = options;

  return (
    <OverLay
      {...attributes}
      open={visible}
      onCancel={(arg: any) => {
        onCancel?.(arg);
        setVisible(false);
      }}
      onOk={(arg: any) => {
        if (onOk) {
          onOk(arg, setVisible);
        } else {
          setVisible(false);
        }
        instance.resolve(arg);
      }}
      afterClose={() => {
        if (destroyOnHidden) {
          overlayManager.destroy(instance.id);
        }
      }}
      onClose={(...args: any[]) => {
        onCancel?.call(null, args?.[0]);
        setVisible(false);
      }}
      update={(config: any) => {
        setAttributes((prev) => ({ ...prev, ...config }));
      }}
    >
      {content}
    </OverLay>
  );
};

/**
 * 弹窗容器组件
 *
 * 需要挂载在 App 根组件位置（能访问所有 Context 的地方），
 * 保证指令式 showOverLay 打开的弹窗仍在 React 树内，可以穿透 Context 并响应数据更新。
 *
 * @example
 * ```tsx
 * const App = () => (
 *   <ConfigProvider theme={...}>
 *     <ReduxProvider store={...}>
 *       <Router>
 *         <YourRoutes />
 *         <OverlayContainer />
 *       </Router>
 *     </ReduxProvider>
 *   </ConfigProvider>
 * );
 * ```
 */
export const OverlayContainer: React.FC = () => {
  // notify 是组件独占的，多个组件调用 useSyncExternalStore 会生成各自独立的 notify，互不干扰
  const overlays = useSyncExternalStore(
    // React 18+ useSyncExternalStore 要求 subscribe 函数稳定引用
    overlayManager.subscribe,
    () => overlayManager.getOverlays(),
  );

  if (overlays.length === 0) return null;
  
  return createPortal(
    <>
      {overlays.map((instance) => (
        <OverlayInstanceRender key={instance.id} instance={instance} />
      ))}
    </>,
    document.body,
  );
};
