import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { OverLay } from './Component';
import { ChilrenComponent, OverLayProps, ModalProps, DrawerProps } from './type';
import { useMemrizedFn } from '@hooks/hooks';

export const showOverLay = (
  Component: ChilrenComponent,
  options: OverLayProps = {},
) => {
  const { onCancel, onOk, destroyOnHidden = true } = options

  return new Promise((resolve) => {

    const container = document.createElement('div'); // 容器dom
    const root = createRoot(container, { 
      identifierPrefix: "test"
    });

    // 移除容器dom
    const unmountHandle = (): void => {
      root.unmount();
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };

    const Wrapper = () => {
      const [visible, setVisible] = useState(true);
      // 弹框属性集合
      const [attributes, setAttributes] = useState<ModalProps & DrawerProps>(options);
      
      return (
        <OverLay
          {...attributes}
          open={visible}
          onCancel={(arg: any) => {
            onCancel?.(arg);
            setVisible(false);
          }}
          onOk={(arg: any) => {
            if(onOk) {
              onOk(arg, setVisible);
            } else {
              setVisible(false);
            }
            resolve(arg);
          }}
          afterClose={() => {
            if(destroyOnHidden) {
              unmountHandle();
            }
          }}
          onClose={(...args: any[]) => {
            onCancel?.call(null, args?.[0]);
            setVisible(false);
          }}
          update={(config: ModalProps & DrawerProps) => {
            // 更新弹框属性配置
            setAttributes((prev: ModalProps & DrawerProps) => ({ ...prev, ...config }))
          }}
        >
          {Component}
        </OverLay>
      );
    };

    root.render(<Wrapper />);
    document.body.appendChild(container);
    
  });
};

export const useOverLay = (options: OverLayProps = {}) => {
  const [visible, setVisible] = useState(false);
  return {
    toggle: useMemrizedFn(() => setVisible((prev) => !prev)),
    OverLay: useMemrizedFn(({ children, ...overLayProps }: { children: React.ReactNode } & OverLayProps) => (
      <OverLay
        {...options}
        {...overLayProps}
        open={visible}
        onCancel={(arg: any) => {
          options.onCancel?.(arg);
          setVisible(false);
        }}
        onOk={(arg: any) => {
          if(options.onOk) {
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
    )),
  };
};
