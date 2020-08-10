import React, { useState } from 'react';
import { Button } from 'antd';

import './useState.scss';

/**
 * 让函数式组件拥有状态管理特性，类似class组件中的this.state和this.setState
 * 需要特别注意，setXXX并不会像this.setState合并旧的状态，
 * 它是完全替代了旧的状态(下面例子2)，如果要实现合并，需要自己处理。
 * If the new state is computed using the previous state,
 * you can pass a function to setState. The function will
 * receive the previous value, and return an updated value.
 */
/**
 *  lazy initial state.
 * If the initial state is the result of an expensive computation,
 * you may provide a function instead, which will be executed only on the initial render.
 * for example:
 * const [state, setState] = useState(() => {
 *   const initialState = someExpensiveComputation(props);
 *   return initialState;
 * });
 */
const UseStateDemo = ({ title }) => {
  const [count, setCount] = useState(() => 0);

  // 2
  const [{ count1, count2 }, setCount2] = useState({ count1: 10, count2: 20 });

  const changeCount1 = (prevCount) => {
    const newValue = {
      ...prevCount,
      count1: prevCount.count1 + 10,
    };
    return newValue;
  };
  const changeCount2 = (prevCount) => {
    const newValue = {
      ...prevCount,
      count2: prevCount.count2 + 10,
    };
    return newValue;
  };

  return (
    <div>
      <div className="demo">
        <p>最简单的示例：</p>
        <span>clicked {count} times.</span>
        <div>
          <Button
            size="small"
            type="primary"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            click
          </Button>
        </div>
      </div>
      <div></div>
      <div className="demo">
        <span>对象更新示例：</span>
        <p>Count1: {count1}</p>
        <p>Count2: {count2}</p>
        <Button size="small" type="primary" onClick={() => setCount2({ count1: 10, count2: 20 })}>
          重置
        </Button>
        <div className="button-group">
          <Button
            size="small"
            onClick={() =>
              setCount2((prevCount) => {
                return { count1: prevCount.count1 + 10 };
              })
            }
          >
            count1+10(会丢失count2)
          </Button>
          <Button
            size="small"
            onClick={() => setCount2((prevCount) => ({ count2: prevCount.count2 + 10 }))}
          >
            count2+10(会丢失count1)
          </Button>
          <Button size="small" onClick={() => setCount2(changeCount1)}>
            count1+10(保留count2)
          </Button>
          <Button size="small" onClick={() => setCount2(changeCount2)}>
            count2+10(保留count1)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UseStateDemo;
