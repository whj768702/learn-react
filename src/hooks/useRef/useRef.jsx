import React, {useRef, useState, useEffect} from 'react';

import {Button, Input} from "antd";

function useRefDemo() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.value = 'hello world!';
    console.log(inputEl);
  };

  const [text, setText] = useState('ce shi');
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current = text;
    console.log('terxtRef.current: ', textRef.current);
  });
  return (
    <>
      <Input type="text" ref={inputEl}/>
      <Button onClick={onButtonClick}>在input上展示文字</Button>
      <br/>
      <br/>
      <Input type="text" value={text} onChange={(e) => {
        setText(e.target.value);
      }}/>
    </>
  );
}

export default useRefDemo;
