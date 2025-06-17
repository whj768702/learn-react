import { useCallback, useState } from "react";

/**
 * useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
 * useMemo返回缓存的值
 * const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
 * useCallback返回缓存的函数
 * const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);
 * 官方文档说是和useMemo类似。示例还不是很明白。
 */

const UseCallbackDemo = () => {
  const [lisi, setLisi] = useState("李四等待中");
  const [wangwu, setWangwu] = useState("王五等待中");

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setLisi(new Date().getTime());
        }}
      >
        李四
      </button>
      <button
        type="button"
        onClick={() => {
          setWangwu(new Date().getTime());
        }}
      >
        王五
      </button>
      <ChildComponent name={lisi}>{wangwu}</ChildComponent>
    </>
  );
};

function ChildComponent({ name, children }) {
  function changeLisi(name) {
    console.log("李四来了", name);
    return `${name}李四来了！！！`;
  }

  // 解决不必要的渲染，优化性能
  // 第二个参数，name变化时，才重新渲染
  const actionLisi = useCallback(() => changeLisi(name), [name]);

  return (
    <>
      <div>{actionLisi()}</div>
      {/* 王五更新，李四每次也会打印，性能影响 */}
      {/* <div>{changeLisi()}</div> */}
      <div>{children}</div>
    </>
  );
}

export default UseCallbackDemo;
