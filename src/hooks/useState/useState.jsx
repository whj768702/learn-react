import React, { useState } from 'react';

/**
 * 让函数式组件拥有状态管理特性，类似class组件中的this.state和this.setState
 * 需要特别注意，setXXX并不会像this.setState合并旧的状态，
 * 它是完全替代了旧的状态(下面例子2)，如果要实现合并，需要自己处理。
 * If the new state is computed using the previous state,
 * you can pass a function to setState. The function will
 * receive the previous value, and return an updated value.
 */
const UseStateDemo = ({title}) => {
  const [count, setCount] = useState(0);

  // 2
  const [count2, setCount2] = useState({count:1,type: '-'});

  return (
    <div>
      <div>
      <p>clicked {count} times.</p>
      <button onClick={()=>{setCount(count+1)}}>click</button>
      </div>
      <div>
        <p>Count2: {count2.count}</p>
        <button onClick={() => setCount2(prevCount=>{
          return {count: prevCount.count-1};
         })}>-</button>
        <button onClick={() => setCount2(prevCount =>prevCount.count+1)}>+</button>
        <button onClick={() => setCount2(() => {
          console.log(count2);
          --count2.count;
          console.log(count2);
          return count2;
        })}>-(并无变化)</button>
      </div>
    </div>
  );
}

export default UseStateDemo;
