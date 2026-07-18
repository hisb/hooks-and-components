# OverLay

## 方案A：`useAppOverLay`（推荐）

基于 React 声明式渲染的轻量方案。弹窗通过 `overlay()` 在 JSX 中声明式渲染，天然在 React 树内，内容组件的 props 直接由外层 state 驱动，数据变化自动响应。

### 使用方法

```tsx
import { useState } from 'react';
import { useAppOverLay } from './index';

const SomeComponent = (props) => <div>{props.count}</div>;

function MyPage() {
  const [count, setCount] = useState(0);
  const { overlay, show, close, update, visible } = useAppOverLay({
    type: 'modal',
    title: '弹窗title',
    footer: null,
  });

  return (
    <>
      <button onClick={() => show().then(res => console.log('确认结果:', res))}>
        打开弹窗
      </button>
      {/* 弹窗在 JSX 中声明式渲染，数据变化自动响应 */}
      {overlay(<SomeComponent count={count} setCount={setCount} />)}
    </>
  );
}

export default MyPage;
```

- `show()`：命令式打开弹窗，返回 Promise，`onOk` 时 resolve
- `close()`：关闭弹窗
- `update({ title: '新标题' })`：更新弹窗属性（title、width 等），支持antd中定义所有属性
- `overlay(<Component />)`：在 JSX 中渲染弹窗，子组件接收 `onClose`、`onOk`、`update` props

---

## 方案B：`showOverLay` + `useOverLay`（原 createRoot 方案）

### ① `showOverLay` — 命令式调用

调用时创建独立 React Root 挂载到 body，适合最直接的命令式场景。

```tsx
import { showOverLay } from './index';

const SomeComponent = (props) => <div>{props.data}</div>;

// 1. 给组件附加 .show() 方法
const MyModal = showOverLay(SomeComponent, { type: 'modal', title: '指令式调用弹窗' });

// 2. 在组件中通过事件触发 .show()，返回 Promise
function MyPage() {
  const handleOpen = async () => {
    const result = await MyModal.show({ data: 'hello', overLayProps: { width: 800 } });
    console.log(result);
  };

  return <button onClick={handleOpen}>打开弹窗</button>;
}

export default MyPage;
```

### ② `useOverLay` — 声明式 Hook

```tsx
import { useOverLay } from './index';

const SomeComponent = (props) => <div>{props.data}</div>;

function MyPage() {
  const { toggle, OverLay } = useOverLay({ type: 'drawer', title: '我是一个抽屉弹窗' });

  return (
    <>
      <button onClick={toggle}>打开抽屉</button>
      <OverLay>
        {/* 弹窗内容组件 */}
        <SomeComponent data="hello" />
      </OverLay>
    </>
  );
}

export default MyPage;
```

---

## 方案对比

| 维度 | 方案A：`useAppOverLay` | 方案B：`showOverLay` (createRoot) |
|------|------------------------|-----------------------------------|
| **渲染方式** | JSX 声明式渲染，在调用方 React 树内 | 创建独立 React Root，脱离调用方 React 树 |
| **Context 穿透** | 天然支持，共享调用方的 Context（antd ConfigProvider、主题等） | 不支持，弹窗在独立 Root 中，无法获取调用方 Context |
| **数据驱动** | props 由外层 useState 驱动，数据变化自动更新弹窗内容 | 弹窗内容是静态快照，需通过 `update` 额外传递 |
| **API 风格** | `show()` 命令式打开 + `overlay()` 声明式渲染，两者结合 | 纯命令式 `.show()`，或纯声明式 `toggle`，二选一 |
| **使用复杂度** | 略高，需要在 JSX 中放置 `overlay()` | 低，`showOverLay(Comp, opts).show()` 一行搞定 |
| **额外依赖** | 无 | 无（直接 `createRoot`） |
| **适用场景** | 弹窗内容需要响应页面数据变化、需共享 Context | 简单弹窗、只需一次性传参、不需要 Context |

### Demo

```tsx
import { useState } from 'react';
import { showOverLay, useAppOverLay } from './index';

const OverLayComponent = (props) => {
  return (
    <div>
      弹窗组件，当前计数：{props.count}
      <button onClick={() => props.setCount(props.count + 1)}>count++</button>
      <button onClick={() => props.update({ title: '弹窗标题已修改' })}>修改弹窗标题</button>
      <button onClick={() => props.onClose('cancel result')}>取消</button>
      <button onClick={() => props.onOk('sure result')}>确认</button>
    </div>
  );
};

// 方案B：为组件附加 .show() 方法
const OverLayComponentModal = showOverLay(OverLayComponent, {
  type: 'modal',
  title: '新增',
  footer: null,
});

export default function Container() {
  const [count, setCount] = useState(0);

  // 方案A：声明式
  const { overlay, show } = useAppOverLay({ title: '方案A', type: 'modal', footer: null });

  return (
    <>
      <div>
        <button onClick={() => show().then(res => console.log(res))}>
          指令式打开弹窗
        </button>
      </div>
      {overlay(<OverLayComponent count={count} setCount={setCount} />)}
    </>
  );
}
```
