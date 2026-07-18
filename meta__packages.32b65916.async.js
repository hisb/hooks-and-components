"use strict";(self.webpackChunkhooks=self.webpackChunkhooks||[]).push([[56],{95039:function(C,n,e){var s;e.r(n),e.d(n,{demos:function(){return E}});var h=e(90228),d=e.n(h),x=e(48305),f=e.n(x),O=e(87999),c=e.n(O),o=e(85170),E={"overlay-demo-0":{component:o.memo(o.lazy(c()(d()().mark(function v(){var m,u,i,r,p,t;return d()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return t=function(){var M=u(0),l=f()(M,2),y=l[0],P=l[1],k=r({type:"modal",title:"\u5F39\u7A97title",footer:null}),R=k.overlay,b=k.show,D=k.close,W=k.update,L=k.visible;return o.createElement(o.Fragment,null,o.createElement("button",{onClick:function(){return b().then(function(U){return console.log("\u786E\u8BA4\u7ED3\u679C:",U)})}},"\u6253\u5F00\u5F39\u7A97"),R(o.createElement(p,{count:y,setCount:P})))},_.next=3,Promise.resolve().then(e.t.bind(e,85170,19));case 3:return m=_.sent,u=m.useState,_.next=7,Promise.all([e.e(792),e.e(429)]).then(e.bind(e,51429));case 7:return i=_.sent,r=i.useAppOverLay,p=function(M){return o.createElement("div",null,M.count)},_.abrupt("return",{default:t});case 11:case"end":return _.stop()}},v)})))),asset:{type:"BLOCK",id:"overlay-demo-0",refAtomIds:["overLay"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { useAppOverLay } from './index';

const SomeComponent = (props) => <div>{props.count}</div>;

function MyPage() {
  const [count, setCount] = useState(0);
  const { overlay, show, close, update, visible } = useAppOverLay({
    type: 'modal',
    title: '\u5F39\u7A97title',
    footer: null,
  });

  return (
    <>
      <button onClick={() => show().then(res => console.log('\u786E\u8BA4\u7ED3\u679C:', res))}>
        \u6253\u5F00\u5F39\u7A97
      </button>
      {/* \u5F39\u7A97\u5728 JSX \u4E2D\u58F0\u660E\u5F0F\u6E32\u67D3\uFF0C\u6570\u636E\u53D8\u5316\u81EA\u52A8\u54CD\u5E94 */}
      {overlay(<SomeComponent count={count} setCount={setCount} />)}
    </>
  );
}

export default MyPage;`},react:{type:"NPM",value:"18.0.0"}},entry:"index.tsx"},routeId:"components/overLay/index",context:{react:s||(s=e.t(o,2))},renderOpts:{compile:function(){var v=c()(d()().mark(function u(){var i,r=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(783).then(e.bind(e,82783));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,r));case 3:case"end":return t.stop()}},u)}));function m(){return v.apply(this,arguments)}return m}()}},"overlay-demo-1":{component:o.memo(o.lazy(c()(d()().mark(function v(){var m,u,i,r,p;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(){var I=function(){var M=c()(d()().mark(function l(){var y;return d()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,r.show({data:"hello",overLayProps:{width:800}});case 2:y=k.sent,console.log(y);case 4:case"end":return k.stop()}},l)}));return function(){return M.apply(this,arguments)}}();return o.createElement("button",{onClick:I},"\u6253\u5F00\u5F39\u7A97")},a.next=3,Promise.all([e.e(792),e.e(429)]).then(e.bind(e,51429));case 3:return m=a.sent,u=m.showOverLay,i=function(I){return o.createElement("div",null,I.data)},r=u(i,{type:"modal",title:"\u6307\u4EE4\u5F0F\u8C03\u7528\u5F39\u7A97"}),a.abrupt("return",{default:p});case 8:case"end":return a.stop()}},v)})))),asset:{type:"BLOCK",id:"overlay-demo-1",refAtomIds:["overLay"],dependencies:{"index.tsx":{type:"FILE",value:`import { showOverLay } from './index';

const SomeComponent = (props) => <div>{props.data}</div>;

// 1. \u7ED9\u7EC4\u4EF6\u9644\u52A0 .show() \u65B9\u6CD5
const MyModal = showOverLay(SomeComponent, { type: 'modal', title: '\u6307\u4EE4\u5F0F\u8C03\u7528\u5F39\u7A97' });

// 2. \u5728\u7EC4\u4EF6\u4E2D\u901A\u8FC7\u4E8B\u4EF6\u89E6\u53D1 .show()\uFF0C\u8FD4\u56DE Promise
function MyPage() {
  const handleOpen = async () => {
    const result = await MyModal.show({ data: 'hello', overLayProps: { width: 800 } });
    console.log(result);
  };

  return <button onClick={handleOpen}>\u6253\u5F00\u5F39\u7A97</button>;
}

export default MyPage;`}},entry:"index.tsx"},routeId:"components/overLay/index",context:{},renderOpts:{compile:function(){var v=c()(d()().mark(function u(){var i,r=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(783).then(e.bind(e,82783));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,r));case 3:case"end":return t.stop()}},u)}));function m(){return v.apply(this,arguments)}return m}()}},"overlay-demo-2":{component:o.memo(o.lazy(c()(d()().mark(function v(){var m,u,i,r;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){var _=u({type:"drawer",title:"\u6211\u662F\u4E00\u4E2A\u62BD\u5C49\u5F39\u7A97"}),I=_.toggle,M=_.OverLay;return o.createElement(o.Fragment,null,o.createElement("button",{onClick:I},"\u6253\u5F00\u62BD\u5C49"),o.createElement(M,null,o.createElement(i,{data:"hello"})))},t.next=3,Promise.all([e.e(792),e.e(429)]).then(e.bind(e,51429));case 3:return m=t.sent,u=m.useOverLay,i=function(_){return o.createElement("div",null,_.data)},t.abrupt("return",{default:r});case 7:case"end":return t.stop()}},v)})))),asset:{type:"BLOCK",id:"overlay-demo-2",refAtomIds:["overLay"],dependencies:{"index.tsx":{type:"FILE",value:`import { useOverLay } from './index';

const SomeComponent = (props) => <div>{props.data}</div>;

function MyPage() {
  const { toggle, OverLay } = useOverLay({ type: 'drawer', title: '\u6211\u662F\u4E00\u4E2A\u62BD\u5C49\u5F39\u7A97' });

  return (
    <>
      <button onClick={toggle}>\u6253\u5F00\u62BD\u5C49</button>
      <OverLay>
        {/* \u5F39\u7A97\u5185\u5BB9\u7EC4\u4EF6 */}
        <SomeComponent data="hello" />
      </OverLay>
    </>
  );
}

export default MyPage;`}},entry:"index.tsx"},routeId:"components/overLay/index",context:{},renderOpts:{compile:function(){var v=c()(d()().mark(function u(){var i,r=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(783).then(e.bind(e,82783));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,r));case 3:case"end":return t.stop()}},u)}));function m(){return v.apply(this,arguments)}return m}()}},"overlay-demo-3":{component:o.memo(o.lazy(c()(d()().mark(function v(){var m,u,i,r,p,t,a;return d()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,85170,19));case 2:return m=I.sent,u=m.useState,I.next=6,Promise.all([e.e(792),e.e(429)]).then(e.bind(e,51429));case 6:return i=I.sent,r=i.showOverLay,p=i.useAppOverLay,t=function(l){return o.createElement("div",null,"\u5F39\u7A97\u7EC4\u4EF6\uFF0C\u5F53\u524D\u8BA1\u6570\uFF1A",l.count,o.createElement("button",{onClick:function(){return l.setCount(l.count+1)}},"count++"),o.createElement("button",{onClick:function(){return l.update({title:"\u5F39\u7A97\u6807\u9898\u5DF2\u4FEE\u6539"})}},"\u4FEE\u6539\u5F39\u7A97\u6807\u9898"),o.createElement("button",{onClick:function(){return l.onClose("cancel result")}},"\u53D6\u6D88"),o.createElement("button",{onClick:function(){return l.onOk("sure result")}},"\u786E\u8BA4"))},a=r(t,{type:"modal",title:"\u65B0\u589E",footer:null}),I.abrupt("return",{default:function(){var l=u(0),y=f()(l,2),P=y[0],k=y[1],R=p({title:"\u65B9\u6848A",type:"modal",footer:null}),b=R.overlay,D=R.show;return o.createElement(o.Fragment,null,o.createElement("div",null,o.createElement("button",{onClick:function(){return D().then(function(L){return console.log(L)})}},"\u6307\u4EE4\u5F0F\u6253\u5F00\u5F39\u7A97")),b(o.createElement(t,{count:P,setCount:k})))}});case 12:case"end":return I.stop()}},v)})))),asset:{type:"BLOCK",id:"overlay-demo-3",refAtomIds:["overLay"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { showOverLay, useAppOverLay } from './index';

const OverLayComponent = (props) => {
  return (
    <div>
      \u5F39\u7A97\u7EC4\u4EF6\uFF0C\u5F53\u524D\u8BA1\u6570\uFF1A{props.count}
      <button onClick={() => props.setCount(props.count + 1)}>count++</button>
      <button onClick={() => props.update({ title: '\u5F39\u7A97\u6807\u9898\u5DF2\u4FEE\u6539' })}>\u4FEE\u6539\u5F39\u7A97\u6807\u9898</button>
      <button onClick={() => props.onClose('cancel result')}>\u53D6\u6D88</button>
      <button onClick={() => props.onOk('sure result')}>\u786E\u8BA4</button>
    </div>
  );
};

// \u65B9\u6848B\uFF1A\u4E3A\u7EC4\u4EF6\u9644\u52A0 .show() \u65B9\u6CD5
const OverLayComponentModal = showOverLay(OverLayComponent, {
  type: 'modal',
  title: '\u65B0\u589E',
  footer: null,
});

export default function Container() {
  const [count, setCount] = useState(0);

  // \u65B9\u6848A\uFF1A\u58F0\u660E\u5F0F
  const { overlay, show } = useAppOverLay({ title: '\u65B9\u6848A', type: 'modal', footer: null });

  return (
    <>
      <div>
        <button onClick={() => show().then(res => console.log(res))}>
          \u6307\u4EE4\u5F0F\u6253\u5F00\u5F39\u7A97
        </button>
      </div>
      {overlay(<OverLayComponent count={count} setCount={setCount} />)}
    </>
  );
}`},react:{type:"NPM",value:"18.0.0"}},entry:"index.tsx"},routeId:"components/overLay/index",context:{react:s||(s=e.t(o,2))},renderOpts:{compile:function(){var v=c()(d()().mark(function u(){var i,r=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(783).then(e.bind(e,82783));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,r));case 3:case"end":return t.stop()}},u)}));function m(){return v.apply(this,arguments)}return m}()}}}},71043:function(C,n,e){e.r(n),e.d(n,{demos:function(){return h}});var s=e(85170),h={}},29954:function(C,n,e){var s;e.r(n),e.d(n,{demos:function(){return v}});var h=e(90228),d=e.n(h),x=e(48305),f=e.n(x),O=e(87999),c=e.n(O),o=e(85170),E=e(96770),v={"packages-hooks-src-create-update-effect-hook-demo-0":{component:o.memo(o.lazy(c()(d()().mark(function m(){var u,i,r,p,t,a,_,I;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,85170,19));case 2:return u=l.sent,i=u.useEffect,r=u.useState,p=u.useLayoutEffect,l.next=8,Promise.resolve().then(e.bind(e,96770));case 8:return t=l.sent,a=t.default,_=a(i),I=a(p),l.abrupt("return",{default:function(){var P=r(0),k=f()(P,2),R=k[0],b=k[1];return _(function(){console.log("useUpdateEffect")},[R]),I(function(){console.log("useUpdateLayoutEffect")},[R]),o.createElement("div",null,"count: ",R,o.createElement("button",{onClick:function(){return b(R+1)}},"click"))}});case 13:case"end":return l.stop()}},m)})))),asset:{type:"BLOCK",id:"packages-hooks-src-create-update-effect-hook-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useEffect, useState, useLayoutEffect } from 'react';
import createUpdateEffectHook from './index';
const useUpdateEffect = createUpdateEffectHook(useEffect);
const useUpdateLayoutEffect = createUpdateEffectHook(useLayoutEffect);

export default function Component() {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => {
    console.log('useUpdateEffect');
  }, [count]);

  useUpdateLayoutEffect(() => {
    console.log('useUpdateLayoutEffect');
  }, [count]);

  return <div>
    count: {count}
    <button onClick={() => setCount(count + 1)}>click</button>
  </div>
}`},react:{type:"NPM",value:"18.0.0"},"./index.ts":{type:"FILE",value:e(74518).Z}},entry:"index.tsx"},routeId:"hooks/createUpdateEffectHook/index",context:{"./index.ts":E,react:s||(s=e.t(o,2)),"/home/runner/work/hooks-and-components/hooks-and-components/packages/hooks/src/createUpdateEffectHook/index.ts":E},renderOpts:{compile:function(){var m=c()(d()().mark(function i(){var r,p=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(783).then(e.bind(e,82783));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,p));case 3:case"end":return a.stop()}},i)}));function u(){return m.apply(this,arguments)}return u}()}}}},65919:function(C,n,e){var s,h;e.r(n),e.d(n,{demos:function(){return u}});var d=e(90228),x=e.n(d),f=e(48305),O=e.n(f),c=e(87999),o=e.n(c),E=e(85170),v=e(89529),m=e(6753),u={"packages-hooks-src-hook-create-demo-0":{component:E.memo(E.lazy(o()(x()().mark(function i(){var r,p,t,a,_,I,M,l,y,P,k,R,b,D;return x()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,Promise.resolve().then(e.bind(e,6753));case 2:return r=L.sent,p=r.Tick,t=r.useState,a=r.useEffect,_=r.useMemo,I=r.useCallback,M=r.useReducer,L.next=11,Promise.resolve().then(e.t.bind(e,85170,19));case 11:return l=L.sent,y=l.default,P=l.useRef,k=l.useEffect,L.next=17,Promise.resolve().then(e.t.bind(e,89529,19));case 17:return R=L.sent,b=R.default,D=function(U){var B=t(0),S=O()(B,2),T=S[0],H=S[1],w=t("hello"),$=O()(w,2),g=$[0],G=$[1];a(function(){return console.log("useEffectHook",T,g),function(){console.log("useEffectHook cleanup",T,g)}},[T,g]);var Z=_(function(){return T+g},[T,g]),X=I(function(){console.log("useCallbackHook",T,g)},[T,g]),N=M(function(A,K){switch(K){case"inc":return A+1;case"dec":return A-1;default:return A}},0),j=O()(N,2),J=j[0],z=j[1];return y.createElement("div",null,y.createElement("p",null,"count: ",T),y.createElement("p",null,"str: ",g),y.createElement("p",null,"memoStr: ",Z),y.createElement("div",null,y.createElement("button",{onClick:function(){H(T+1),H(function(K){return K+2})}},"count++"),y.createElement("button",{onClick:function(){return G("world")}},"str change")),y.createElement("div",null,y.createElement("button",{onClick:function(){return z("inc")},style:{display:"inline-block"}},"+"),y.createElement("p",{style:{display:"inline-block"}},J),y.createElement("button",{onClick:function(){return z("dec")},style:{display:"inline-block"}},"-")))},L.abrupt("return",{default:function(){var U=P(null),B=function(T){T.render(y.createElement(D,null))};return k(function(){if(U.current){var S=b.createRoot(U.current);B(S),p.render=B.bind(null,S)}},[]),y.createElement("div",{ref:U})}});case 21:case"end":return L.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-hooks-src-hook-create-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tick, useState, resetIndex, useEffect as useEffectHook, useMemo as useMemoHook, useCallback as useCallbackHook, useReducer as useReducerHook } from './index';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const ChildrenComponent = (props) => {
  const [count, setCount] = useState(0);
  const [str, setStr] = useState('hello');

  useEffectHook(() => {
    console.log('useEffectHook', count, str);

    return () => {
      console.log('useEffectHook cleanup', count, str);
    }
  }, [count, str]);
  
  const memoStr = useMemoHook(() => {
    return count + str;
  }, [count, str]);

  const callback = useCallbackHook(() => {
    console.log('useCallbackHook', count, str);
  }, [count, str]);

  const [reducerState, reducerDispatch] = useReducerHook((state, action) => {
    switch(action) {
      case 'inc':
        return state + 1;
      case 'dec':
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return (
    <div>
      <p>count: {count}</p>
      <p>str: {str}</p>
      <p>
        memoStr: {memoStr}
      </p>
      <div>
        <button onClick={() => {
          setCount(count + 1);
          setCount(p => p + 2);
        }}>
          count++
        </button>
        <button onClick={() => setStr('world')}>str change</button>
      </div>
      <div>
        <button onClick={() => reducerDispatch('inc')} style={{display: 'inline-block'}}>+</button>
        <p style={{display: 'inline-block'}}>{reducerState}</p>
        <button onClick={() => reducerDispatch('dec')} style={{display: 'inline-block'}}>-</button>
      </div>
    </div>
  );
}

export default function Component() {
  const containerRef = useRef(null);

  const reRender = (root) => {
    root.render(<ChildrenComponent />);
  }

  useEffect(() => {
    if (!containerRef.current) {
      return;
    } 
    const root = ReactDOM.createRoot(containerRef.current);
    reRender(root);
    Tick.render = reRender.bind(null, root);
  }, []);


  return (
    <div ref={containerRef}></div>
  );
}`},react:{type:"NPM",value:"18.0.0"},"react-dom":{type:"NPM",value:"18.0.0"},"./index.ts":{type:"FILE",value:e(97541).Z}},entry:"index.tsx"},routeId:"hooks/hookCreate/index",context:{"./index.ts":m,react:s||(s=e.t(E,2)),"react-dom/client":h||(h=e.t(v,2)),"/home/runner/work/hooks-and-components/hooks-and-components/packages/hooks/src/hookCreate/index.ts":m},renderOpts:{compile:function(){var i=o()(x()().mark(function p(){var t,a=arguments;return x()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,e.e(783).then(e.bind(e,82783));case 2:return I.abrupt("return",(t=I.sent).default.apply(t,a));case 3:case"end":return I.stop()}},p)}));function r(){return i.apply(this,arguments)}return r}()}}}},59694:function(C,n,e){e.r(n),e.d(n,{demos:function(){return c}});var s=e(90228),h=e.n(s),d=e(87999),x=e.n(d),f=e(85170),O=e(79582),c={"packages-hooks-src-use-debounce-demo-0":{component:f.memo(f.lazy(x()(h()().mark(function o(){var E,v;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,79582));case 2:return E=u.sent,v=E.default,u.abrupt("return",{default:function(){var r=v(function(){console.log("Debounced function called")},1e3);return f.createElement("div",null,f.createElement("button",{onClick:function(){return r()}},"Click me"))}});case 5:case"end":return u.stop()}},o)})))),asset:{type:"BLOCK",id:"packages-hooks-src-use-debounce-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import useDebounce from './index';

export default function ComponentWithDebounce() {
  const debouncedFn = useDebounce(() => {
    console.log('Debounced function called');
  }, 1000);

  return (
    <div>
      <button onClick={() => debouncedFn()}>Click me</button>
    </div>
  );
}`},"./index.ts":{type:"FILE",value:e(28764).Z}},entry:"index.tsx"},routeId:"hooks/useDebounce/index",context:{"./index.ts":O,"/home/runner/work/hooks-and-components/hooks-and-components/packages/hooks/src/useDebounce/index.ts":O},renderOpts:{compile:function(){var o=x()(h()().mark(function v(){var m,u=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(783).then(e.bind(e,82783));case 2:return r.abrupt("return",(m=r.sent).default.apply(m,u));case 3:case"end":return r.stop()}},v)}));function E(){return o.apply(this,arguments)}return E}()}}}},5441:function(C,n,e){var s;e.r(n),e.d(n,{demos:function(){return v}});var h=e(90228),d=e.n(h),x=e(48305),f=e.n(x),O=e(87999),c=e.n(O),o=e(85170),E=e(19800),v={"packages-hooks-src-use-lasted-demo-0":{component:o.memo(o.lazy(c()(d()().mark(function m(){var u,i,r,p,t;return d()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,19800));case 2:return u=_.sent,i=u.default,_.next=6,Promise.resolve().then(e.t.bind(e,85170,19));case 6:return r=_.sent,p=r.useState,t=r.useEffect,_.abrupt("return",{default:function(){var M=p(0),l=f()(M,2),y=l[0],P=l[1],k=i(y);return t(function(){var R=setInterval(function(){P(++k.current)},1e3);return function(){clearInterval(R)}},[]),o.createElement("div",null,o.createElement("p",null,"count: ",y),o.createElement("p",null,"lastedCount: ",k.current))}});case 10:case"end":return _.stop()}},m)})))),asset:{type:"BLOCK",id:"packages-hooks-src-use-lasted-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import useLasted from './index';
import { useState, useEffect } from 'react';

export default function Component() {
  const [count, setCount] = useState(0);
  const lastedRef = useLasted(count);

  useEffect(() => {
    const timer = setInterval(() => {
      // console.log(lastedRef.current);
      // setCount(count => count + 1);
      setCount(++lastedRef.current);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      <p>lastedCount: {lastedRef.current}</p>
    </div>
  );
}`},react:{type:"NPM",value:"18.0.0"},"./index.ts":{type:"FILE",value:e(64658).Z}},entry:"index.tsx"},routeId:"hooks/useLasted/index",context:{"./index.ts":E,react:s||(s=e.t(o,2)),"/home/runner/work/hooks-and-components/hooks-and-components/packages/hooks/src/useLasted/index.ts":E},renderOpts:{compile:function(){var m=c()(d()().mark(function i(){var r,p=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(783).then(e.bind(e,82783));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,p));case 3:case"end":return a.stop()}},i)}));function u(){return m.apply(this,arguments)}return u}()}}}},63544:function(C,n,e){var s;e.r(n),e.d(n,{demos:function(){return v}});var h=e(90228),d=e.n(h),x=e(48305),f=e.n(x),O=e(87999),c=e.n(O),o=e(85170),E=e(97284),v={"packages-hooks-src-use-memrized-fn-demo-0":{component:o.memo(o.lazy(c()(d()().mark(function m(){var u,i,r,p;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,97284));case 2:return u=a.sent,i=u.default,a.next=6,Promise.resolve().then(e.t.bind(e,85170,19));case 6:return r=a.sent,p=r.useState,a.abrupt("return",{default:function(){var I=p(0),M=f()(I,2),l=M[0],y=M[1],P=i(function(){console.log(l),y(l+1)});return o.createElement("div",null,o.createElement("p",null,"count: ",l),o.createElement("p",null,"memrizedCount: ",P.current),o.createElement("button",{onClick:function(){return P()}},"\u589E\u52A0"))}});case 9:case"end":return a.stop()}},m)})))),asset:{type:"BLOCK",id:"packages-hooks-src-use-memrized-fn-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import useMemrizedFn from './index';
import { useState, useEffect } from 'react';

export default function Component() {
  const [count, setCount] = useState(0);
  const memrizedFn = useMemrizedFn(() => {
    console.log(count);
    setCount(count + 1);
  });

  return (
    <div>
      <p>count: {count}</p>
      <p>memrizedCount: {memrizedFn.current}</p>
      <button onClick={() => memrizedFn()}>\u589E\u52A0</button>
    </div>
  );
}`},react:{type:"NPM",value:"18.0.0"},"./index.ts":{type:"FILE",value:e(91601).Z}},entry:"index.tsx"},routeId:"hooks/useMemrizedFn/index",context:{"./index.ts":E,react:s||(s=e.t(o,2)),"/home/runner/work/hooks-and-components/hooks-and-components/packages/hooks/src/useMemrizedFn/index.ts":E},renderOpts:{compile:function(){var m=c()(d()().mark(function i(){var r,p=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(783).then(e.bind(e,82783));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,p));case 3:case"end":return a.stop()}},i)}));function u(){return m.apply(this,arguments)}return u}()}}}},45135:function(C,n,e){e.r(n),e.d(n,{demos:function(){return c}});var s=e(90228),h=e.n(s),d=e(87999),x=e.n(d),f=e(85170),O=e(5231),c={"packages-hooks-src-use-throtte-demo-0":{component:f.memo(f.lazy(x()(h()().mark(function o(){var E,v;return h()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,5231));case 2:return E=u.sent,v=E.default,u.abrupt("return",{default:function(){var r=v(function(){console.log("Throttled function called")},1e3);return f.createElement("div",null,f.createElement("button",{onClick:function(){return r()}},"Click me"))}});case 5:case"end":return u.stop()}},o)})))),asset:{type:"BLOCK",id:"packages-hooks-src-use-throtte-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import useThrottle from './index';

export default function ComponentWithThrottle() {

  const throttledFn = useThrottle(() => {
    console.log('Throttled function called');
  }, 1000);

  return (
    <div>
      <button onClick={() => throttledFn()}>Click me</button>
    </div>
  );
}`},"./index.ts":{type:"FILE",value:e(61908).Z}},entry:"index.tsx"},routeId:"hooks/useThrotte/index",context:{"./index.ts":O,"/home/runner/work/hooks-and-components/hooks-and-components/packages/hooks/src/useThrotte/index.ts":O},renderOpts:{compile:function(){var o=x()(h()().mark(function v(){var m,u=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(783).then(e.bind(e,82783));case 2:return r.abrupt("return",(m=r.sent).default.apply(m,u));case 3:case"end":return r.stop()}},v)}));function E(){return o.apply(this,arguments)}return E}()}}}},2379:function(C,n,e){e.r(n),e.d(n,{demos:function(){return h}});var s=e(85170),h={}},61051:function(C,n,e){e.r(n),e.d(n,{demos:function(){return h}});var s=e(85170),h={}},96770:function(C,n,e){e.r(n),e.d(n,{useUpdateEffect:function(){return d},useUpdateLayoutEffect:function(){return x}});var s=e(85170),h=function(O){return function(c,o){var E=(0,s.useRef)(!1);O(function(){return function(){E.current=!1}},[]),O(function(){if(!E.current){E.current=!0;return}c()},o)}},d=h(s.useEffect),x=h(s.useLayoutEffect);n.default=h},6753:function(C,n,e){e.r(n),e.d(n,{Tick:function(){return E},resetIndex:function(){return o},useCallback:function(){return i},useEffect:function(){return m},useMemo:function(){return u},useReducer:function(){return r},useState:function(){return v}});var s=e(48305),h=e.n(s),d=e(26068),x=e.n(d),f=[],O=null,c=0,o=function(){c=0},E={list:[],add:function(t){this.list.push(t)},nextTick:function(t){var a=this;this.add(t),Promise.resolve().then(function(){a.list.length!==0&&(a.list.forEach(function(_){return _()}),c=0,a.list=[],a.render&&a.render())})},render:null};function v(p){f[c]===void 0&&(f[c]=typeof p=="function"?p():p);var t=c;function a(_){var I=typeof _=="function"?_(f[t]):_;E.nextTick(function(){f[t]=I})}return[f[c++],a]}function m(p,t){if(typeof p!="function")throw new Error("effect must be a function");if(!Array.isArray(t))throw new Error("deps must be an array");var a=t.some(function(l,y){var P;return l!==((P=f[c])===null||P===void 0||(P=P.deps)===null||P===void 0?void 0:P[y])});if(a){var _,I=(_=f[c])===null||_===void 0?void 0:_.effect,M=c;setTimeout(function(){I&&I();var l=p();l&&typeof l=="function"&&(f[M]=x()(x()({},f[M]),{},{deps:t,effect:l}))})}f[c++]={deps:t,effect:null}}var u=function(t,a){if(typeof t!="function")throw new Error("factory must be a function");if(!Array.isArray(a))throw new Error("deps must be an array");var _=a.some(function(I,M){var l;return I!==((l=f[c])===null||l===void 0||(l=l.deps)===null||l===void 0?void 0:l[M])});return _&&(f[c]={deps:a,state:t()}),f[c++].state},i=function(t,a){return u(function(){return t},a)},r=function(t,a){var _=v(a),I=h()(_,2),M=I[0],l=I[1],y=function(R,b){var D=t(R,b);l(D)},P=y.bind(null,M);return[M,P]}},79582:function(C,n,e){e.r(n),e.d(n,{default:function(){return d}});var s=e(85170),h=e(97284);function d(x,f){var O=(0,s.useRef)(0),c=(0,s.useRef)(null),o=(0,h.default)(function(){for(var E=arguments.length,v=new Array(E),m=0;m<E;m++)v[m]=arguments[m];var u=Date.now();u-O.current<f&&c.current&&clearTimeout(c.current),O.current=u,c.current=setTimeout(function(){x.apply(void 0,v),c.current=null},f)});return o}},19800:function(C,n,e){e.r(n),e.d(n,{default:function(){return h}});var s=e(85170);function h(d){var x=(0,s.useRef)(d);return x.current=d,x}},97284:function(C,n,e){e.r(n),e.d(n,{default:function(){return x}});var s=e(31759),h=e.n(s),d=e(85170);function x(f){if(typeof f!="function")throw new Error("useMemrizedFn expected parameter is a function, got ".concat(h()(f)));var O=(0,d.useRef)(f);O.current=(0,d.useMemo)(function(){return f},[f]);var c=(0,d.useCallback)(function(){for(var o=arguments.length,E=new Array(o),v=0;v<o;v++)E[v]=arguments[v];return O.current.apply(this,E)},[]);return c}},5231:function(C,n,e){e.r(n),e.d(n,{default:function(){return d}});var s=e(85170),h=e(97284);function d(x,f){var O=(0,s.useRef)(0),c=(0,h.default)(function(){var o=Date.now();o-O.current>=f&&(O.current=o,x.apply(void 0,arguments))});return c}},28810:function(C,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:"useAppOverLay",paraId:0},{value:"\u57FA\u4E8E React \u58F0\u660E\u5F0F\u6E32\u67D3\u7684\u8F7B\u91CF\u65B9\u6848\u3002\u5F39\u7A97\u901A\u8FC7 ",paraId:1,tocIndex:1},{value:"overlay()",paraId:1,tocIndex:1},{value:" \u5728 JSX \u4E2D\u58F0\u660E\u5F0F\u6E32\u67D3\uFF0C\u5929\u7136\u5728 React \u6811\u5185\uFF0C\u5185\u5BB9\u7EC4\u4EF6\u7684 props \u76F4\u63A5\u7531\u5916\u5C42 state \u9A71\u52A8\uFF0C\u6570\u636E\u53D8\u5316\u81EA\u52A8\u54CD\u5E94\u3002",paraId:1,tocIndex:1},{value:"show()",paraId:2},{value:"\uFF1A\u547D\u4EE4\u5F0F\u6253\u5F00\u5F39\u7A97\uFF0C\u8FD4\u56DE Promise\uFF0C",paraId:2},{value:"onOk",paraId:2},{value:" \u65F6 resolve",paraId:2},{value:"close()",paraId:2},{value:"\uFF1A\u5173\u95ED\u5F39\u7A97",paraId:2},{value:"update({ title: '\u65B0\u6807\u9898' })",paraId:2},{value:"\uFF1A\u66F4\u65B0\u5F39\u7A97\u5C5E\u6027\uFF08title\u3001width \u7B49\uFF09\uFF0C\u652F\u6301antd\u4E2D\u5B9A\u4E49\u6240\u6709\u5C5E\u6027",paraId:2},{value:"overlay(<Component />)",paraId:2},{value:"\uFF1A\u5728 JSX \u4E2D\u6E32\u67D3\u5F39\u7A97\uFF0C\u5B50\u7EC4\u4EF6\u63A5\u6536 ",paraId:2},{value:"onClose",paraId:2},{value:"\u3001",paraId:2},{value:"onOk",paraId:2},{value:"\u3001",paraId:2},{value:"update",paraId:2},{value:" props",paraId:2},{value:"showOverLay",paraId:0},{value:"useOverLay",paraId:0},{value:"showOverLay",paraId:0},{value:"\u8C03\u7528\u65F6\u521B\u5EFA\u72EC\u7ACB React Root \u6302\u8F7D\u5230 body\uFF0C\u9002\u5408\u6700\u76F4\u63A5\u7684\u547D\u4EE4\u5F0F\u573A\u666F\u3002",paraId:3,tocIndex:4},{value:"useOverLay",paraId:0},{value:"\u7EF4\u5EA6",paraId:4,tocIndex:6},{value:"\u65B9\u6848A\uFF1A",paraId:4,tocIndex:6},{value:"useAppOverLay",paraId:4,tocIndex:6},{value:"\u65B9\u6848B\uFF1A",paraId:4,tocIndex:6},{value:"showOverLay",paraId:4,tocIndex:6},{value:" (createRoot)",paraId:4,tocIndex:6},{value:"\u6E32\u67D3\u65B9\u5F0F",paraId:4,tocIndex:6},{value:"JSX \u58F0\u660E\u5F0F\u6E32\u67D3\uFF0C\u5728\u8C03\u7528\u65B9 React \u6811\u5185",paraId:4,tocIndex:6},{value:"\u521B\u5EFA\u72EC\u7ACB React Root\uFF0C\u8131\u79BB\u8C03\u7528\u65B9 React \u6811",paraId:4,tocIndex:6},{value:"Context \u7A7F\u900F",paraId:4,tocIndex:6},{value:"\u5929\u7136\u652F\u6301\uFF0C\u5171\u4EAB\u8C03\u7528\u65B9\u7684 Context\uFF08antd ConfigProvider\u3001\u4E3B\u9898\u7B49\uFF09",paraId:4,tocIndex:6},{value:"\u4E0D\u652F\u6301\uFF0C\u5F39\u7A97\u5728\u72EC\u7ACB Root \u4E2D\uFF0C\u65E0\u6CD5\u83B7\u53D6\u8C03\u7528\u65B9 Context",paraId:4,tocIndex:6},{value:"\u6570\u636E\u9A71\u52A8",paraId:4,tocIndex:6},{value:"props \u7531\u5916\u5C42 useState \u9A71\u52A8\uFF0C\u6570\u636E\u53D8\u5316\u81EA\u52A8\u66F4\u65B0\u5F39\u7A97\u5185\u5BB9",paraId:4,tocIndex:6},{value:"\u5F39\u7A97\u5185\u5BB9\u662F\u9759\u6001\u5FEB\u7167\uFF0C\u9700\u901A\u8FC7 ",paraId:4,tocIndex:6},{value:"update",paraId:4,tocIndex:6},{value:" \u989D\u5916\u4F20\u9012",paraId:4,tocIndex:6},{value:"API \u98CE\u683C",paraId:4,tocIndex:6},{value:"show()",paraId:4,tocIndex:6},{value:" \u547D\u4EE4\u5F0F\u6253\u5F00 + ",paraId:4,tocIndex:6},{value:"overlay()",paraId:4,tocIndex:6},{value:" \u58F0\u660E\u5F0F\u6E32\u67D3\uFF0C\u4E24\u8005\u7ED3\u5408",paraId:4,tocIndex:6},{value:"\u7EAF\u547D\u4EE4\u5F0F ",paraId:4,tocIndex:6},{value:".show()",paraId:4,tocIndex:6},{value:"\uFF0C\u6216\u7EAF\u58F0\u660E\u5F0F ",paraId:4,tocIndex:6},{value:"toggle",paraId:4,tocIndex:6},{value:"\uFF0C\u4E8C\u9009\u4E00",paraId:4,tocIndex:6},{value:"\u4F7F\u7528\u590D\u6742\u5EA6",paraId:4,tocIndex:6},{value:"\u7565\u9AD8\uFF0C\u9700\u8981\u5728 JSX \u4E2D\u653E\u7F6E ",paraId:4,tocIndex:6},{value:"overlay()",paraId:4,tocIndex:6},{value:"\u4F4E\uFF0C",paraId:4,tocIndex:6},{value:"showOverLay(Comp, opts).show()",paraId:4,tocIndex:6},{value:" \u4E00\u884C\u641E\u5B9A",paraId:4,tocIndex:6},{value:"\u989D\u5916\u4F9D\u8D56",paraId:4,tocIndex:6},{value:"\u65E0",paraId:4,tocIndex:6},{value:"\u65E0\uFF08\u76F4\u63A5 ",paraId:4,tocIndex:6},{value:"createRoot",paraId:4,tocIndex:6},{value:"\uFF09",paraId:4,tocIndex:6},{value:"\u9002\u7528\u573A\u666F",paraId:4,tocIndex:6},{value:"\u5F39\u7A97\u5185\u5BB9\u9700\u8981\u54CD\u5E94\u9875\u9762\u6570\u636E\u53D8\u5316\u3001\u9700\u5171\u4EAB Context",paraId:4,tocIndex:6},{value:"\u7B80\u5355\u5F39\u7A97\u3001\u53EA\u9700\u4E00\u6B21\u6027\u4F20\u53C2\u3001\u4E0D\u9700\u8981 Context",paraId:4,tocIndex:6}]},43206:function(C,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[]},52195:function(C,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:`\u521B\u5EFA\u4E00\u4E2A\u66F4\u65B0\u7684 useEffect \u94A9\u5B50\uFF0C\u7528\u4E8E\u5728\u7EC4\u4EF6\u66F4\u65B0\u65F6\u6267\u884C\u526F\u4F5C\u7528\u3002\u5FFD\u7565\u9996\u6B21\u66F4\u65B0\uFF0C\u53EA\u5728\u540E\u7EED\u66F4\u65B0\u65F6\u6267\u884C\u3002
\u652F\u6301useEffect\u3001useLayoutEffect\u3002`,paraId:0,tocIndex:0}]},39795:function(C,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:"\u2728 \u8BF4\u660E",paraId:0},{value:`\u91C7\u7528\u6570\u7EC4\u7684\u5F62\u5F0F\u6A21\u62DF\u5B9E\u73B0\u57FA\u7840hooks\u3002
\u771F\u6B63\u5B9E\u73B0\u7684hooks\uFF0C\u662F\u91C7\u7528\u5355\u94FE\u8868\u7684\u5F62\u5F0F\u6765\u7BA1\u7406\u6240\u6709\u7684hook\uFF0C\u5176\u4E2D\u91C7\u7528next\u5B57\u6BB5\u6765\u4E32\u8FDE\u6240\u6709\u7684hook\u3002`,paraId:1},{value:"\u81EA\u5B9A\u4E49\u4E865\u4E2A\u57FA\u672C\u7684hook\uFF1AuseState\u3001useMemo\u3001useCallback\u3001useReducer\u3001useEffect",paraId:2},{value:"demo\u7EC4\u4EF6\u91CD\u65B0\u521B\u5EFA\u4E86\u4E00\u4E2Adom\u5143\u7D20\u4F5C\u4E3A\u5BB9\u5668\u6839\u8282\u70B9\uFF0Crender\u4E00\u4E2A\u5B50\u7EC4\u4EF6\uFF0C\u6765\u6A21\u62DFreact\u6839\u8282\u70B9\u7684\u91CD\u65B0render\u6765\u66F4\u65B0\u5B50\u7EC4\u4EF6\u4E2D\u7684\u6570\u636E\u3002",paraId:2}]},92645:function(C,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:"\u9632\u6296\u51FD\u6570\uFF1A\u65E0\u8BBA\u7528\u6237\u662F\u5426\u6301\u7EED\u70B9\u51FB\uFF0C\u53EA\u5728\u6700\u540E\u4E00\u6B21\u70B9\u51FB\u540E\u5EF6\u8FDF\u65F6\u95F4\u5230\u4E86\uFF0C\u624D\u4F1A\u8C03\u7528\u539F\u59CB\u51FD\u6570\u3002",paraId:0,tocIndex:0},{value:"\u4F7F\u7528\u65B9\u6CD5\uFF1A",paraId:1,tocIndex:0}]},3832:function(C,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:`\u4F7F\u7528 useRef \u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 hook\uFF0C\u7528\u4E8E\u59CB\u7EC8\u83B7\u53D6\u6700\u65B0\u7684\u503C\u3002\u4E5F\u53EF\u7528\u4E8E\u83B7\u53D6\u4E0A\u4E00\u6B21\u6E32\u67D3\u7684\u503C\u7684\u573A\u666F\u3002
\u4F7F\u7528\u573A\u666F\uFF1A`,paraId:0,tocIndex:0},{value:"\u5F53\u60A8\u9700\u8981\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u4E0A\u4E00\u6B21\u6E32\u67D3\u7684\u503C\u65F6\uFF0C\u4F8B\u5982\u5728\u52A8\u753B\u4E2D\u4F7F\u7528\u4E0A\u4E00\u6B21\u6E32\u67D3\u7684\u4F4D\u7F6E",paraId:1,tocIndex:0},{value:"\u4F46\u8FD9\u4E2Ahook\u5B9A\u4E49\u7684\u5B57\u6BB5\u4E0D\u80FD\u9A71\u52A8\u89C6\u56FE\u7684\u66F4\u65B0\uFF0C\u9700\u8981\u901A\u8FC7state\u7684\u66F4\u65B0\u8FBE\u5230\u89C6\u56FE\u66F4\u65B0\u7684\u6548\u679C",paraId:1,tocIndex:0},{value:"demo\u4E2D\u56E0\u95ED\u5305\u5F15\u8D77\u7684\u62FF\u4E0D\u5230\u6700\u65B0\u503C\u7684\u95EE\u9898\u53EF\u4EE5\u91C7\u7528setState\u901A\u8FC7\u83B7\u53D6\u5386\u53F2state\u7684\u65B9\u5F0F\u89E3\u51B3",paraId:1,tocIndex:0}]},12115:function(C,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:"\u4F7F\u7528\u573A\u666F\uFF1A",paraId:0,tocIndex:0},{value:"\u5F53\u60A8\u9700\u8981\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u4E0A\u4E00\u6B21\u6E32\u67D3\u7684\u503C\u65F6\uFF0C\u4F8B\u5982\u5728\u52A8\u753B\u4E2D\u4F7F\u7528\u4E0A\u4E00\u6B21\u6E32\u67D3\u7684\u4F4D\u7F6E",paraId:1,tocIndex:0},{value:"\u4F46\u8FD9\u4E2Ahook\u5B9A\u4E49\u7684\u5B57\u6BB5\u4E0D\u80FD\u9A71\u52A8\u89C6\u56FE\u7684\u66F4\u65B0\uFF0C\u9700\u8981\u901A\u8FC7state\u7684\u66F4\u65B0\u8FBE\u5230\u89C6\u56FE\u66F4\u65B0\u7684\u6548\u679C",paraId:1,tocIndex:0},{value:"demo\u4E2D\u56E0\u95ED\u5305\u5F15\u8D77\u7684\u62FF\u4E0D\u5230\u6700\u65B0\u503C\u7684\u95EE\u9898\u53EF\u4EE5\u91C7\u7528setState\u901A\u8FC7\u83B7\u53D6\u5386\u53F2state\u7684\u65B9\u5F0F\u89E3\u51B3",paraId:1,tocIndex:0}]},61538:function(C,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:`useThrottle \u662F\u4E00\u4E2A\u7528\u4E8E\u8282\u6D41\u51FD\u6570\u7684 hook\u3002
\u5B83\u63A5\u6536\u4E00\u4E2A\u51FD\u6570\u548C\u4E00\u4E2A\u5EF6\u8FDF\u65F6\u95F4\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u8282\u6D41\u540E\u7684\u51FD\u6570\u3002
\u8282\u6D41\u540E\u7684\u51FD\u6570\u5728\u8C03\u7528\u65F6\uFF0C\u53EA\u6709\u5728\u4E0A\u4E00\u6B21\u8C03\u7528\u540E\u5EF6\u8FDF\u65F6\u95F4\u5230\u4E86\uFF0C\u624D\u4F1A\u8C03\u7528\u539F\u59CB\u51FD\u6570\u3002
\u5982\u679C\u5728\u5EF6\u8FDF\u65F6\u95F4\u5185\u518D\u6B21\u8C03\u7528\uFF0C\u4E0D\u4F1A\u8C03\u7528\u539F\u59CB\u51FD\u6570\u3002`,paraId:0,tocIndex:0}]},56772:function(C,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:"\u5F53\u5217\u8868\u9879\u9AD8\u5EA6\u4E0D\u56FA\u5B9A\uFF08\u52A8\u6001\u9AD8\u5EA6\uFF09\u65F6\uFF0CFixedHeightList \u7684\u56FA\u5B9A\u9AD8\u5EA6\u5047\u8BBE\u4E0D\u518D\u9002\u7528\u3002AutoHeightList \u901A\u8FC7\u52A8\u6001\u6D4B\u91CF\u6BCF\u4E2A\u5217\u8868\u9879\u7684\u5B9E\u9645\u9AD8\u5EA6\uFF0C\u5B9E\u73B0\u4E0D\u7B49\u9AD8\u5217\u8868\u9879\u7684\u865A\u62DF\u5316\u6E32\u67D3\u3002",paraId:0,tocIndex:1},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:3},{value:"estimatedItemHeight",paraId:1,tocIndex:3},{value:" \u4F5C\u4E3A\u5217\u8868\u9879\u7684\u521D\u59CB\u4F30\u7B97\u9AD8\u5EA6\u3002",paraId:1,tocIndex:3},{value:"\u521D\u59CB\u5316\u6240\u6709 item \u7684\u4F4D\u7F6E\u4FE1\u606F\uFF08height \u548C offset\uFF09\u3002",paraId:1,tocIndex:3},{value:"\u6BCF\u4E2A\u5217\u8868\u9879\u6E32\u67D3\u65F6\u4F20\u5165 ",paraId:2,tocIndex:4},{value:"measureRef",paraId:2,tocIndex:4},{value:"\uFF0C\u901A\u8FC7 ",paraId:2,tocIndex:4},{value:"ResizeObserver",paraId:2,tocIndex:4},{value:" \u6216 DOM \u56DE\u8C03\u6D4B\u91CF\u5B9E\u9645\u9AD8\u5EA6\u3002",paraId:2,tocIndex:4},{value:"\u5F53\u9AD8\u5EA6\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u66F4\u65B0\u5BF9\u5E94 item \u7684\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u5E76\u91CD\u65B0\u8BA1\u7B97\u540E\u7EED\u6240\u6709 item \u7684 offset\u3002",paraId:2,tocIndex:4},{value:"\u57FA\u4E8E\u5B9E\u9645\u6D4B\u91CF\u7684\u9AD8\u5EA6\u548C offset\uFF0C\u901A\u8FC7\u4E8C\u5206\u67E5\u627E\u786E\u5B9A\u53EF\u89C6\u533A\u57DF\u7684\u8D77\u6B62\u7D22\u5F15\u3002",paraId:3,tocIndex:5},{value:"\u56E0\u4E3A\u6BCF\u4E2A item \u9AD8\u5EA6\u4E0D\u540C\uFF0C\u4E0D\u80FD\u7528\u7B80\u5355\u9664\u6CD5\u8BA1\u7B97\uFF0C\u9700\u8981\u901A\u8FC7 item \u7684 offset \u6765\u67E5\u627E\u3002",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"useMemo",paraId:4,tocIndex:6},{value:" \u7F13\u5B58\u53EF\u89C6\u533A\u57DF\u8BA1\u7B97\u7ED3\u679C\u3002",paraId:4,tocIndex:6},{value:"\u4EC5\u5728 ",paraId:4,tocIndex:6},{value:"scrollTop",paraId:4,tocIndex:6},{value:"\u3001",paraId:4,tocIndex:6},{value:"itemPositions",paraId:4,tocIndex:6},{value:" \u7B49\u4F9D\u8D56\u53D8\u5316\u65F6\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:4,tocIndex:6}]},94636:function(C,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:"\u5F53\u5217\u8868\u6570\u636E\u91CF\u975E\u5E38\u5927\uFF08\u4F8B\u5982\u4E0A\u4E07\u6761\uFF09\u65F6\uFF0C\u5982\u679C\u4E00\u6B21\u6027\u6E32\u67D3\u6240\u6709 DOM \u8282\u70B9\uFF0C\u4F1A\u5BFC\u81F4\u4E25\u91CD\u7684\u6027\u80FD\u95EE\u9898\uFF1A\u9875\u9762\u5361\u987F\u3001\u5185\u5B58\u5360\u7528\u8FC7\u9AD8\u3001\u6EDA\u52A8\u4E0D\u6D41\u7545\u3002\u865A\u62DF\u5217\u8868\u7684\u6838\u5FC3\u601D\u60F3\u662F",paraId:0,tocIndex:1},{value:"\u53EA\u6E32\u67D3\u53EF\u89C6\u533A\u57DF\u5185\u7684\u5217\u8868\u9879",paraId:0,tocIndex:1},{value:"\uFF0C\u4ECE\u800C\u5B9E\u73B0\u65E0\u8BBA\u6570\u636E\u91CF\u591A\u5927\uFF0CDOM \u8282\u70B9\u6570\u4FDD\u6301\u5728\u4E00\u4E2A\u53EF\u63A7\u7684\u8303\u56F4\u5185\u3002",paraId:0,tocIndex:1},{value:"\u521B\u5EFA\u4E00\u4E2A\u5177\u6709\u56FA\u5B9A\u9AD8\u5EA6 ",paraId:1,tocIndex:3},{value:"containerHeight",paraId:1,tocIndex:3},{value:" \u7684\u5916\u5C42\u5BB9\u5668\uFF0C\u8BBE\u7F6E ",paraId:1,tocIndex:3},{value:"overflow-y: auto",paraId:1,tocIndex:3},{value:"\uFF0C\u4F7F\u5176\u6210\u4E3A\u6EDA\u52A8\u5BB9\u5668\u3002",paraId:1,tocIndex:3},{value:"\u5728\u5BB9\u5668\u5185\u90E8\u521B\u5EFA\u4E00\u4E2A\u5360\u4F4D\u5C42\uFF0C\u5176\u9AD8\u5EA6\u7B49\u4E8E ",paraId:1,tocIndex:3},{value:"items.length * itemHeight",paraId:1,tocIndex:3},{value:'\uFF08\u6240\u6709\u5217\u8868\u9879\u7684\u603B\u9AD8\u5EA6\uFF09\uFF0C\u7528\u4E8E\u6491\u5F00\u6EDA\u52A8\u6761\uFF0C\u6A21\u62DF\u51FA\u4E00\u4E2A"\u5B8C\u6574\u5217\u8868"\u7684\u6548\u679C\u3002cult',paraId:1,tocIndex:3},{value:"\u5360\u4F4D\u5C42\u4F7F\u7528 ",paraId:1,tocIndex:3},{value:"position: relative",paraId:1,tocIndex:3},{value:"\uFF0C\u4EE5\u4FBF\u5176\u5185\u90E8\u7684\u5217\u8868\u9879\u53EF\u4EE5\u57FA\u4E8E\u5B83\u8FDB\u884C\u7EDD\u5BF9\u5B9A\u4F4D\u3002",paraId:1,tocIndex:3},{value:"\u76D1\u542C\u5916\u5C42\u5BB9\u5668\u7684 ",paraId:2,tocIndex:4},{value:"onScroll",paraId:2,tocIndex:4},{value:" \u4E8B\u4EF6\uFF0C\u5B9E\u65F6\u83B7\u53D6\u5F53\u524D\u6EDA\u52A8\u4F4D\u7F6E ",paraId:2,tocIndex:4},{value:"scrollTop",paraId:2,tocIndex:4},{value:"\u3002",paraId:2,tocIndex:4},{value:"scrollTop",paraId:2,tocIndex:4},{value:" \u7684\u53D8\u5316\u5C06\u4F5C\u4E3A\u89E6\u53D1\u53EF\u89C6\u533A\u57DF\u91CD\u65B0\u8BA1\u7B97\u7684\u552F\u4E00\u4FE1\u53F7\u3002",paraId:2,tocIndex:4},{value:"\u7531\u4E8E\u6BCF\u4E2A\u5217\u8868\u9879\u9AD8\u5EA6\u56FA\u5B9A\uFF08",paraId:3,tocIndex:5},{value:"itemHeight",paraId:3,tocIndex:5},{value:"\uFF09\uFF0C\u53EF\u89C6\u533A\u57DF\u7684\u8D77\u6B62\u7D22\u5F15\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u516C\u5F0F\u8BA1\u7B97\uFF0C\u4E0D\u9700\u8981\u904D\u5386\uFF1A",paraId:3,tocIndex:5},{value:"\u8D77\u59CB\u7D22\u5F15",paraId:4,tocIndex:5},{value:"\uFF1A",paraId:4,tocIndex:5},{value:"Math.floor(scrollTop / itemHeight)",paraId:4,tocIndex:5},{value:"\uFF0C\u5373\u5F53\u524D\u6EDA\u52A8\u4E86\u591A\u5C11\u4E2A\u5B8C\u6574\u7684 item\u3002",paraId:4,tocIndex:5},{value:"\u53EF\u89C1\u6570\u91CF",paraId:4,tocIndex:5},{value:"\uFF1A",paraId:4,tocIndex:5},{value:"Math.ceil(containerHeight / itemHeight)",paraId:4,tocIndex:5},{value:"\uFF0C\u5373\u5BB9\u5668\u9AD8\u5EA6\u80FD\u5BB9\u7EB3\u591A\u5C11\u4E2A item\u3002",paraId:4,tocIndex:5},{value:"\u7ED3\u675F\u7D22\u5F15",paraId:4,tocIndex:5},{value:"\uFF1A",paraId:4,tocIndex:5},{value:"\u8D77\u59CB\u7D22\u5F15 + \u53EF\u89C1\u6570\u91CF",paraId:4,tocIndex:5},{value:"\u3002",paraId:4,tocIndex:5},{value:"\u5982\u679C\u4EC5\u6E32\u67D3\u4E25\u683C\u53EF\u89C6\u533A\u57DF\u5185\u7684 item\uFF0C\u5FEB\u901F\u6EDA\u52A8\u65F6\u53EF\u80FD\u51FA\u73B0\u77ED\u6682\u7684\u767D\u5C4F\uFF08\u65B0 item \u8FD8\u672A\u6E32\u67D3\uFF09\u3002\u89E3\u51B3\u65B9\u6848\u662F\u5F15\u5165 ",paraId:5,tocIndex:6},{value:"overscan",paraId:5,tocIndex:6},{value:" \u53C2\u6570\uFF1A",paraId:5,tocIndex:6},{value:"\u5728\u8D77\u59CB\u7D22\u5F15\u5F80\u524D\u591A\u6E32\u67D3 ",paraId:6,tocIndex:6},{value:"overscan",paraId:6,tocIndex:6},{value:" \u4E2A item\u3002",paraId:6,tocIndex:6},{value:"\u5728\u7ED3\u675F\u7D22\u5F15\u5F80\u540E\u591A\u6E32\u67D3 ",paraId:6,tocIndex:6},{value:"overscan",paraId:6,tocIndex:6},{value:" \u4E2A item\u3002",paraId:6,tocIndex:6},{value:'\u8FD9\u6837\u5728\u53EF\u89C6\u533A\u57DF\u4E0A\u4E0B\u5404\u6709\u4E00\u6BB5"\u9884\u6E32\u67D3"\u7684\u7F13\u51B2\u533A\uFF0C\u6EDA\u52A8\u65F6\u7528\u6237\u51E0\u4E4E\u611F\u89C9\u4E0D\u5230\u5EF6\u8FDF\u3002',paraId:6,tocIndex:6},{value:"overscan",paraId:6,tocIndex:6},{value:" \u9ED8\u8BA4\u503C\u8BBE\u4E3A 3\uFF0C\u8FD9\u662F\u4E00\u4E2A\u7ECF\u9A8C\u548C\u6027\u80FD\u4E4B\u95F4\u7684\u5E73\u8861\u503C\u3002",paraId:6,tocIndex:6},{value:"\u6700\u7EC8\u7684\u8D77\u6B62\u7D22\u5F15\uFF1A",paraId:7,tocIndex:6},{value:"startIdx = max(0, floor(scrollTop / itemHeight) - overscan)",paraId:8,tocIndex:6},{value:"endIdx = min(items.length, ceil(scrollTop / itemHeight) + visibleCount + overscan)",paraId:8,tocIndex:6},{value:"\u6839\u636E\u8BA1\u7B97\u51FA\u7684 ",paraId:9,tocIndex:7},{value:"startIdx",paraId:9,tocIndex:7},{value:" \u548C ",paraId:9,tocIndex:7},{value:"endIdx",paraId:9,tocIndex:7},{value:"\uFF0C\u5BF9\u539F\u59CB\u6570\u636E ",paraId:9,tocIndex:7},{value:"items",paraId:9,tocIndex:7},{value:" \u505A ",paraId:9,tocIndex:7},{value:"slice",paraId:9,tocIndex:7},{value:" \u64CD\u4F5C\uFF0C\u5F97\u5230\u5F53\u524D\u9700\u8981\u6E32\u67D3\u7684 item \u5B50\u96C6\u3002",paraId:9,tocIndex:7},{value:"\u6BCF\u4E2A\u5B50 item \u4F7F\u7528",paraId:9,tocIndex:7},{value:"\u7EDD\u5BF9\u5B9A\u4F4D",paraId:9,tocIndex:7},{value:"\uFF0C\u5176 ",paraId:9,tocIndex:7},{value:"top",paraId:9,tocIndex:7},{value:" \u503C\u4E3A ",paraId:9,tocIndex:7},{value:"actualIndex * itemHeight",paraId:9,tocIndex:7},{value:"\uFF0C\u7CBE\u786E\u653E\u7F6E\u5728\u5360\u4F4D\u5C42\u4E2D\u7684\u6B63\u786E\u4F4D\u7F6E\u3002",paraId:9,tocIndex:7},{value:"\u8BBE\u7F6E\u6BCF\u4E2A item \u7684\u9AD8\u5EA6\u4E3A ",paraId:9,tocIndex:7},{value:"itemHeight",paraId:9,tocIndex:7},{value:"\uFF0C\u5BBD\u5EA6\u6491\u6EE1\uFF08",paraId:9,tocIndex:7},{value:"left: 0, right: 0",paraId:9,tocIndex:7},{value:"\uFF09\u3002",paraId:9,tocIndex:7},{value:"\u901A\u8FC7 ",paraId:9,tocIndex:7},{value:"getItemKey",paraId:9,tocIndex:7},{value:" \u6216\u7D22\u5F15\u4F5C\u4E3A React ",paraId:9,tocIndex:7},{value:"key",paraId:9,tocIndex:7},{value:"\uFF0C\u786E\u4FDD React \u80FD\u6B63\u786E\u590D\u7528 DOM \u8282\u70B9\u3002",paraId:9,tocIndex:7},{value:"useMemo",paraId:10,tocIndex:8},{value:"\uFF1A",paraId:10,tocIndex:8},{value:"visibleRange",paraId:10,tocIndex:8},{value:" \u548C ",paraId:10,tocIndex:8},{value:"visibleItems",paraId:10,tocIndex:8},{value:" \u7684\u8BA1\u7B97\u4F9D\u8D56\u4E8E ",paraId:10,tocIndex:8},{value:"scrollTop",paraId:10,tocIndex:8},{value:"\u3001",paraId:10,tocIndex:8},{value:"itemHeight",paraId:10,tocIndex:8},{value:"\u3001",paraId:10,tocIndex:8},{value:"containerHeight",paraId:10,tocIndex:8},{value:" \u7B49\u3002\u4F7F\u7528 ",paraId:10,tocIndex:8},{value:"useMemo",paraId:10,tocIndex:8},{value:" \u7F13\u5B58\uFF0C\u4EC5\u5728\u4F9D\u8D56\u53D8\u5316\u65F6\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:10,tocIndex:8},{value:"useCallback",paraId:10,tocIndex:8},{value:"\uFF1A",paraId:10,tocIndex:8},{value:"handleScroll",paraId:10,tocIndex:8},{value:" \u4F7F\u7528 ",paraId:10,tocIndex:8},{value:"useCallback",paraId:10,tocIndex:8},{value:" \u907F\u514D\u6BCF\u6B21\u6E32\u67D3\u90FD\u521B\u5EFA\u65B0\u51FD\u6570\u3002",paraId:10,tocIndex:8},{value:"\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u6E32\u67D3",paraId:10,tocIndex:8},{value:"\uFF1A\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\u53EA\u6709 ",paraId:10,tocIndex:8},{value:"scrollTop",paraId:10,tocIndex:8},{value:" \u53D8\u5316\uFF0C\u901A\u8FC7\u7CBE\u786E\u7684\u4F9D\u8D56\u63A7\u5236\uFF0C\u5176\u4ED6 props\uFF08\u5982 ",paraId:10,tocIndex:8},{value:"renderItem",paraId:10,tocIndex:8},{value:"\u3001",paraId:10,tocIndex:8},{value:"items",paraId:10,tocIndex:8},{value:"\uFF09\u4E0D\u53D8\u65F6\u4E0D\u4F1A\u89E6\u53D1\u65E0\u5173\u8BA1\u7B97\u3002",paraId:10,tocIndex:8},{value:`\u7528\u6237\u6EDA\u52A8
  \u2192 onScroll \u89E6\u53D1 \u2192 \u66F4\u65B0 scrollTop
  \u2192 useMemo \u91CD\u65B0\u8BA1\u7B97 visibleRange\uFF08startIdx, endIdx\uFF09
  \u2192 useMemo \u91CD\u65B0\u8BA1\u7B97 visibleItems\uFF08slice \u5207\u7247\uFF09
  \u2192 React \u5BF9\u6BD4\u6E32\u67D3\uFF1A
      \u65B0\u8FDB\u5165\u53EF\u89C6\u533A\u7684 item \u2192 \u6302\u8F7D
      \u79BB\u5F00\u53EF\u89C6\u533A\u7684 item   \u2192 \u5378\u8F7D
      \u4ECD\u5728\u53EF\u89C6\u533A\u7684 item   \u2192 \u590D\u7528
`,paraId:11,tocIndex:9},{value:"\u53C2\u6570",paraId:12,tocIndex:10},{value:"\u8BF4\u660E",paraId:12,tocIndex:10},{value:"itemHeight",paraId:12,tocIndex:10},{value:"\u6BCF\u4E2A\u5217\u8868\u9879\u7684\u9AD8\u5EA6\uFF0C\u5FC5\u987B\u7CBE\u786E\u3002\u8FD9\u662F\u5B9A\u9AD8\u865A\u62DF\u5217\u8868\u6027\u80FD\u4F18\u52BF\u7684\u6765\u6E90",paraId:12,tocIndex:10},{value:"containerHeight",paraId:12,tocIndex:10},{value:"\u5916\u5C42\u53EF\u89C6\u5BB9\u5668\u7684\u9AD8\u5EA6\uFF0C\u51B3\u5B9A\u4E86\u540C\u65F6\u53EF\u89C1\u7684 item \u6570\u91CF",paraId:12,tocIndex:10},{value:"overscan",paraId:12,tocIndex:10},{value:"\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u503C\u8D8A\u5927\u767D\u5C4F\u6982\u7387\u8D8A\u4F4E\uFF0C\u4F46 DOM \u8282\u70B9\u8D8A\u591A",paraId:12,tocIndex:10},{value:"renderItem",paraId:12,tocIndex:10},{value:"\u6E32\u67D3\u51FD\u6570\uFF0C\u7531\u4F7F\u7528\u8005\u51B3\u5B9A\u6BCF\u4E2A item \u7684\u5185\u5BB9",paraId:12,tocIndex:10},{value:"getItemKey",paraId:12,tocIndex:10},{value:"\u53EF\u9009\uFF0C\u7528\u4E8E\u751F\u6210\u7A33\u5B9A\u7684 React key\uFF0C\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u5378\u8F7D/\u6302\u8F7D",paraId:12,tocIndex:10}]},74518:function(C,n){n.Z=`import { useRef, useEffect, useLayoutEffect } from 'react';
import useMemrizedFn from '../useMemrizedFn';

const createUpdateEffectHook = (hookType: typeof useEffect | typeof useLayoutEffect) => (fn: () => void, deps: any[]) => {
  const mountedRef = useRef(false);

  hookType(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  hookType(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    fn();
  }, deps);
};

export const useUpdateEffect = createUpdateEffectHook(useEffect);
export const useUpdateLayoutEffect = createUpdateEffectHook(useLayoutEffect);

export default createUpdateEffectHook;
`},97541:function(C,n){n.Z=`type stateType = string | number | boolean | object;

interface HookItem<T extends stateType> {
  state?: T;
  deps?: any[];
  effect?: null | (() => void);
}

const queue: HookItem<stateType>[] = [], depsMemo: any[] = [];
let index = 0;
export const resetIndex = () => {
  index = 0;;
}

// \u4E8B\u4EF6\u8C03\u5EA6\u5668
export const Tick = {
  list: [] as (() => void)[],
  add: function(callback: () => void) {
    this.list.push(callback);
  },
  nextTick: function(callback: () => void) {
    this.add(callback);
    Promise.resolve().then(() => {
      if(this.list.length === 0){
        return;
      }
      this.list.forEach((item) => item());
      index = 0;
      this.list = [];
      this.render && this.render();
    });
  },
  render: null
};

export function useState(initialState: any) {
  if (queue[index] === undefined) {
    queue[index] = typeof initialState === 'function' ? initialState() : initialState;
  }
  const currentIndex = index;
  function setState(newState: stateType) {
    const nextState = typeof newState === 'function' ? newState(queue[currentIndex]) : newState;

    Tick.nextTick(() => {
      queue[currentIndex] = nextState;
    });
  }
  return [queue[index++], setState];
}

export function useEffect(effect: any, deps: any[]) {
  if(typeof effect !== 'function'){
    throw new Error('effect must be a function');
  }
  if(!Array.isArray(deps)){
    throw new Error('deps must be an array');
  }
  const changed = deps.some((dep, i) => {
    return dep !== queue[index]?.deps?.[i];
  });
  if(changed) {
    const prevEffect = queue[index]?.effect;  
    const currentIndex = index;
    setTimeout(() => {
      if(prevEffect) {
        prevEffect();
      }
      const result = effect();
      if(result && typeof result === 'function') {
        queue[currentIndex] = {...queue[currentIndex], deps, effect: result};
      }
    });
  }
  queue[index++] = { deps, effect: null };
}

export const useMemo = (factory: () => any, deps: any[]) => {
  if(typeof factory !== 'function'){
    throw new Error('factory must be a function');
  }
  if(!Array.isArray(deps)){
    throw new Error('deps must be an array');
  }
  const changed = deps.some((dep, i) => {
    return dep !== queue[index]?.deps?.[i];
  });
  if(changed) {
    queue[index] = { deps, state: factory() };
  }
  return queue[index++].state;
}

export const useCallback = (factory: () => any, deps: any[]) => {
  return useMemo(() => factory, deps);
}

export const useReducer = (reducer: (state: stateType, action: any) => stateType, initialState: stateType) => {
  const [state, setState] = useState(initialState);
  const update = (state: stateType, action: any) => {
    const nextState = reducer(state, action);
    setState(nextState);
  }
  const dispatch = update.bind(null, state)
  return [state, dispatch];
}
`},28764:function(C,n){n.Z=`import { useRef } from 'react';
import useMemrizedFn from '../useMemrizedFn';

export default function useDebounce<T extends (...args: any[]) => any>(fn: T, delay: number): T {
  const lastTimeRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handler = useMemrizedFn((...args: Parameters<T>) => {
    const _now = Date.now();
    if(_now - lastTimeRef.current < delay) {
      timerRef.current && clearTimeout(timerRef.current);
    }

    lastTimeRef.current = _now;
    timerRef.current = setTimeout(() => {
      fn(...args);
      timerRef.current = null;
    }, delay);
  });
  return handler as T;
}`},64658:function(C,n){n.Z=`import { useRef } from 'react';

export default function useLasted<T>(value: T) {
  const lastedRef = useRef<T>(value);
  lastedRef.current = value;
  return lastedRef;
}`},91601:function(C,n){n.Z=`import { useRef, useCallback, useMemo } from 'react';

export default function useMemrizedFn<T>(fn: T) {
  if(typeof fn !== 'function') {
    throw new Error(\`useMemrizedFn expected parameter is a function, got \${typeof fn}\`);
  }
  // \u662F\u5728 render \u9636\u6BB5 \u76F4\u63A5\u4FEE\u6539 ref \u3002React \u5E76\u53D1\u6A21\u5F0F\u4E0B\u53EF\u80FD\u51FA\u73B0\uFF1Arender \u6267\u884C\u4E86\u4F46\u88AB\u4E22\u5F03\uFF08discarded\uFF09\uFF0C\u4E0B\u6B21\u53C8\u91CD\u65B0 render\u3002\u5982\u679C\u76F4\u63A5\u8D4B\u503C\uFF0Cref \u53EF\u80FD\u6B8B\u7559\u4E86\u88AB\u4E22\u5F03\u90A3\u6B21 render \u7684 fn
  // \u4F46\u5982\u679C fn \u4F9D\u8D56\u4E86 props/state\uFF0C\u88AB\u4E22\u5F03 render \u4E2D\u7684 fn_A \u53EF\u80FD\u95ED\u5305\u4E86\u65E7\u7684\u53D8\u91CF\u503C\uFF0C\u8FD9\u5C31\u786E\u5B9E\u6709\u98CE\u9669
  const memrizedFn = useRef(fn);
  // memrizedFn.current = fn;
  // \u8FD9\u884C\u4F18\u5316\u7684\u610F\u4E49\u4E5F\u4E0D\u592A\u5927\uFF0C\u56E0\u4E3A\u4E0A\u9762\u7684\u60C5\u51B5\u7406\u8BBA\u4E0A\u4F1A\u6709\u95EE\u9898\uFF0C\u4F46\u662F\u5B9E\u9645\u5E94\u7528\u4E2D\u53D1\u751F\u7684\u6982\u7387\u6781\u5C0F\u3002
  memrizedFn.current = useMemo(() => fn, [fn]);

  // \u8FD9\u91CC\u53EF\u4EE5\u76F4\u63A5\u7528ref\u6765\u5B9E\u73B0\uFF0Cref\u53EA\u5B58\u4E00\u6B21\uFF0C\u4FDD\u8BC1\u5BB9\u5668\u51FD\u6570\u4E00\u76F4\u4E0D\u53D8\uFF0C\u53D8\u7684\u662F\u91CC\u9762\u7684ref\u7684\u51FD\u6570\u3002\u5927\u5DEE\u4E0D\u5DEE
  const returnFn = useCallback(function(...args: any[]) {
    return memrizedFn.current.apply(this as any, args);
  }, []);

  return returnFn;
}
`},61908:function(C,n){n.Z=`import { useRef } from 'react';
import useMemrizedFn from '../useMemrizedFn';

export default function useThrottle<T extends (...args: any[]) => any>(fn: T, delay: number): T {
  const lastTimeRef = useRef<number>(0);

  const handler = useMemrizedFn((...args: Parameters<T>) => {
    const _now = Date.now();
    if(_now - lastTimeRef.current >= delay) {
      lastTimeRef.current = _now;
      fn(...args);
    }

  });

  return handler as unknown as T;
}`}}]);
