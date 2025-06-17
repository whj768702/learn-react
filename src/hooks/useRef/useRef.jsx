import { useEffect, useRef, useState } from "react";

import { Button, Input } from "antd";

function UseRefDemo() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.value = "hello world!";
    console.log(inputEl);
  };

  const [text, setText] = useState("ce shi");
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current = text;
    console.log("textRef.current: ", textRef.current);
  });
  return (
    <>
      <input type="text" ref={inputEl} />{" "}
      {/* ant的input不好使，还不知道为啥。原生input好用。*/}
      <Button onClick={onButtonClick}>在input上展示文字</Button>
      <br />
      <br />
      <Input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
}

export default UseRefDemo;
