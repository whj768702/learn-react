import React, {useRef, useState, useEffect} from 'react';
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
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }
  return (
    <>
      <input type="text" value={text} onChange={(e) => {
        setText(e.target.value);
      }}/>
      <br/>
      <span>Ref保留组件上一次的状态:</span>
      <span>{textRef.current}</span>
      <br/>
      <br/>
      <span>操作DOM节点</span>
      <input type="text" ref={inputRef}/>
      <button onClick={onFocusClick}>点了聚焦input</button>
    </>
  );
}

export default useRefDemo;
