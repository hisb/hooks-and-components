import React from 'react';
import { OverLayProps, UpdateFun } from './type';

/**
 * 单个弹窗实例
 */
export interface OverlayInstance {
  id: number;
  content: React.ReactElement;
  options: OverLayProps;
  resolve: (value: any) => void;
}

/**
 * showOverLay 的返回值，自带 update / destroy，无需手动管理 id
 */
export interface OverlayHandle {
  /** 更新弹窗属性（title、width 等），支持数据驱动 */
  update: (config: Parameters<UpdateFun>[0]) => void;
  /** 手动销毁弹窗 */
  destroy: () => void;
  /** Promise，在 onOk 时 resolve */
  promise: Promise<any>;
  /** 内部 id */
  readonly id: number;
}

let idCounter = 0;
let overlays: OverlayInstance[] = [];
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((fn) => fn());
}

export const overlayManager = {
  subscribe(fn: () => void): () => void {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },

  getOverlays(): OverlayInstance[] {
    return overlays;
  },

  /**
   * 打开弹窗
   *
   * @example
   * const modal = showOverLay(<Content />, { title: '加载中...' });
   * modal.update({ title: '已加载' });           // 命令式更新
   * const result = await modal.promise;           // 等待 onOk
   */
  open(content: React.ReactElement, options: OverLayProps = {}): OverlayHandle {
    const id = ++idCounter;
    const promise = new Promise<any>((resolve) => {
      overlays = [...overlays, { id, content, options, resolve }];
    });
    notify();

    return {
      id,
      promise,
      update: (config) => {
        overlays = overlays.map((o) =>
          o.id === id ? { ...o, options: { ...o.options, ...config } } : o,
        );
        notify();
      },
      destroy: () => {
        overlays = overlays.filter((o) => o.id !== id);
        notify();
      },
    };
  },
};
