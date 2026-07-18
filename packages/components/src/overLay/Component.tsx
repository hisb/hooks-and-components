import React from 'react';
import { Drawer, Modal } from 'antd/lib';
import { OverLayProps, OverLayChildrenProps } from './type';

// 弹框抽屉组件
export const OverLay: React.FC<OverLayProps> = ({
  children,
  type = 'drawer',
  onCancel = () => {},
  onOk = () => {},
  onClose = () => {},
  afterClose = () => {},
  open,
  update = () => {},
  ...otherOptions
}) => {
  // 弹框包裹的子组件的props
  const overLayChildrenProps: OverLayChildrenProps = {
    onClose: type === 'drawer' ? onClose : onCancel,
    onOk,
    update
  };
  // 将弹框相关的props注入子组件，支持子组件操作弹框
  const copyChildren = typeof children.type === 'function' ?
    React.cloneElement(children as React.ReactElement, overLayChildrenProps) :
      children;

  // 弹框、抽屉props
  let overLayProps: OverLayProps = {
    open,
    // getContainer: false, 将抽屉渲染到当前组件 DOM 层级，作为页面内联元素，而非全局弹窗
    destroyOnHidden: true,
    ...otherOptions,
  };

  if (type === 'modal') {
    // 弹框
    overLayProps = {
      ...overLayProps,
      onCancel,
      onOk,
      afterClose,
    };
  }
  if (type === 'drawer') {
    // 抽屉
    overLayProps = {
      ...overLayProps,
      onClose,
      afterVisibleChange: (visible: boolean) => {
        if (!visible) {
          afterClose?.();
        }
      },
    };
  }

  const Comp = type === 'modal'
    ? <Modal {...overLayProps}>
        {copyChildren}
      </Modal>
     : <Drawer {...overLayProps}>
        {copyChildren}
      </Drawer>
  return Comp;
};