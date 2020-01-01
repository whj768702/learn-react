import React, {useState, useMemo} from 'react';

function useMemoDemo() {
  const [lisi, setLisi] = useState('李四等待中');
  const [wangwu, setWangwu] = useState('王五等待中');

  return (
    <>
      <button onClick={() => {
        setLisi(new Date().getTime());
      }}>李四
      </button>
      <button onClick={() => {
        setWangwu(new Date().getTime());
      }}>王五
      </button>
      <ChildComponent name={lisi}>{wangwu}</ChildComponent>
    </>
  );
}

function ChildComponent({name, children}) {
  function changeLisi() {
    console.log('李四来了');
    return name + '李四来了！！！';
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

export default useMemoDemo;
