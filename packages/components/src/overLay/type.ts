import { DrawerProps } from 'antd/lib/drawer/';
import { ModalProps } from 'antd/lib/modal';

export type { ModalProps, DrawerProps };

export type ChilrenComponent = React.ReactElement;

export type UpdateFun = (v: DrawerProps & ModalProps) => void;

export type PropsType = {
  type?: 'drawer' | 'modal'; // 弹框类型-drawer、modal
  children?: any;
  onOk?: (v: any, handle: React.Dispatch<React.SetStateAction<boolean>>) => void;
  update?: UpdateFun;
};

export type OverLayProps = DrawerProps & ModalProps & PropsType;

// 弹框传递给子组件的props类型
export type OverLayChildrenProps = {
  onClose: (...args: any[]) => void;
  onOk: (...args: any[]) => void;
  update: UpdateFun;
}