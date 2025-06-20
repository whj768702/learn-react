import { Button } from "antd";
import { useMemo, useState } from "react";

/**
 * 组件内有些方法，只想在其参数更改时运行它们，而不是每次组件更新都运行。
 * 个人理解类似computed方式，依赖有变化了才更新。
 * 缓存函数返回值
 */

function UseMemoDemo() {
  const [lisi, setLisi] = useState("李四等待中");
  const [wangwu, setWangwu] = useState("王五等待中");

  return (
    <>
      <Button
        onClick={() => {
          setLisi(new Date().getTime());
        }}
      >
        李四
      </Button>
      <Button
        onClick={() => {
          setWangwu(new Date().getTime());
        }}
      >
        王五
      </Button>
      <ChildComponent name={lisi}>{wangwu}</ChildComponent>
    </>
  );
}

function ChildComponent({ name, children }) {
  function changeLisi(name) {
    console.log("李四来了");
    return `${name}李四来了！！！`;
  }

  // 解决不必要的渲染，优化性能
  // 第二个参数，name变化时，才重新渲染
  const actionLisi = useMemo(() => changeLisi(name), [name]);
  return (
    <>
      <div>{actionLisi}</div>
      {/*<div>{changeLisi()}</div> 王五更新，李四每次也会打印，性能影响*/}
      <div>{children}</div>
    </>
  );
}

export default UseMemoDemo;
