import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

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
    console.log('list page');
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
  useEffect(() =>{}): 无论哪个变化都会触发;
  []: 只触发一次；
  [xxx]: xxx变化就会触发;
   */
  useEffect(() => {
    console.log(`useEffect => you clicked ${count} times`);
    return () => {
      console.log('=========');
    }
  }, [count]);

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => {
        setCount(count + 1);
      }}>click
      </button>
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>index</Link>
          </li>
          <li>
            <Link to='/list'>list</Link>
          </li>
        </ul>
        <Route path='/' exact component={Index}></Route>
        <Route path='/list' component={List}></Route>
      </BrowserRouter>
    </div>
  );
};

export default UseEffectDemo;
