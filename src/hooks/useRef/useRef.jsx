import React, { useRef, useState, useEffect } from 'react';
import { Input, Button } from 'antd';
/**
 * 作用：获取DOM元素的节点
        获取子组件的实例
        渲染周期之间共享数据的存储（state不能存储跨渲染周期的数据，因为state的保存会触发组件重渲染）
 */
function useRefDemo() {
  const [text, setText] = useState('ce shi');
  const textRef = useRef(text);

  useEffect(() => {
    textRef.current = text;
    console.log('terxtRef.current: ', textRef.current);
  });

  const inputRef = useRef();
  const onFocusClick = () => {
    console.log('inputRef: ', inputRef);
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const wrapRef = useRef();
  const getWrapRef = () => {
    console.log('wrapRef: ', wrapRef.current);
  };
  return (
    <div ref={wrapRef} onClick={getWrapRef}>
      <Input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      <span>Ref保留组件上一次的状态:</span>
      <span>{textRef.current}</span>
      <br />
      <br />
      <span>操作DOM节点</span>
      <Input type="text" ref={inputRef} />
      <Button onClick={onFocusClick}>点了聚焦input</Button>
    </div>
  );
}

export default useRefDemo;
