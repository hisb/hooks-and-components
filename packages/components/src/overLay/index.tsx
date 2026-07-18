import React from 'react';
import { showOverLay as overLay } from './overLay';
import { attachPropertiesToComponent } from './utils';

// ============================================================
// 方案A：基于 antd App 组件的轻量声明式方案（推荐）
// 前提：应用根节点需用 <App> 包裹
// 弹窗在 JSX 中声明式渲染，天然在 React 树内
// 不需要外部 store、useSyncExternalStore、OverlayContainer
// ============================================================

export { useAppOverLay } from './overLayApp';

// ============================================================
// 原始 createRoot 方案（默认，向后兼容）
// 弹窗创建独立 React Root，简单直接，但脱离 Context
// ============================================================

export { useOverLay } from './overLay';

/**
 * 为组件附加 .show() 方法，调用时创建独立 React Root 打开弹窗
 *
 * @example
 * const MyModal = showOverLay(MyContent, { type: 'modal', title: '新增' });
 * const result = await MyModal.show({ data: xxx, overLayProps: { width: 800 } });
 */
export const showOverLay = (Comp: React.FunctionComponent<any>, overLayPropsStatic: Record<string, any>) => {
  return attachPropertiesToComponent(Comp, {
    show: (options: Record<string, any> | undefined = {}) => {
      const { overLayProps = {}, ...other } = options;
      return overLay(<Comp {...other} />, { ...overLayPropsStatic, ...overLayProps })
    }
  })
}

// ============================================================
// 方案B：Portal + 外部 store 方案
// 需挂载 <OverlayContainer /> 在 App 根节点
// 弹窗保持在 React 树内，支持 Context 穿透和数据驱动更新
// ============================================================

// export { showOverLay as showOverLayPortal } from './overLayNew';
// export { OverlayContainer } from './OverlayContainer';
// export { overlayManager } from './overlayManager';
// export type { OverlayHandle } from './overlayManager';
