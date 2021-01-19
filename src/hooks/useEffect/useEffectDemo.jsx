import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Button } from 'antd';

/**
 * 每次render或者re-render都会执行useEffect
 */

function Index() {
  useEffect(() => {
    console.log('index come');
    return () => {
      console.log('index go');
    };
  }, []);

  return <h2>index</h2>;
}

function List() {
  useEffect(() => {
    console.log('list page in');
    return () => {
      console.log('list go');
    };
  }, []);

  return <h2>list page</h2>;
}

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);

  /*
  effect中返回的一个方法起到解绑回收等操作。
  deps中是依赖，有对应依赖才会触发effect执行;
  useEffect(() =>{}): 无论哪个跟踪的值变化都会触发;
  []: 只触发一次；
  [xxx]: xxx变化就会触发;
   */
  useEffect(() => {
    console.log(`useEffect => you clicked ${count} times`);
    return () => {
      console.log('======回收函数执行了======');
    };
  }, [count]);

  useEffect(() => {
    console.log('add mousemove event');
    const onMouseMove = e => {
      console.log(e);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      console.log('mousemove event revmoved');
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div>
      <p>you clicked {count} times</p>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </Button>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">index</Link>
          </li>
          <li>
            <Link to="/list">list</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list" component={List}></Route>
      </BrowserRouter>
    </div>
  );
};

export default UseEffectDemo;
