import React, {useRef, useState, useEffect} from 'react';

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
      <input type="text" ref={inputEl}/>
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br/>
      <br/>
      <input type="text" value={text} onChange={(e) => {
        setText(e.target.value);
      }}/>
    </>
  );
}

export default useRefDemo;
