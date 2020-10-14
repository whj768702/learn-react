import React, {createContext, useContext, useState} from 'react';
// import ShowContent from '../../ShowContent/ShowContent';
import {Button} from "antd";

const CountContext = createContext(0);

function ShowCount() {
  let count = useContext(CountContext);
  return (<h2>{count}</h2>);
}

// 父子组件间传值
const UseContextDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>clicked {count} times</p>
      <Button onClick={() => {
        setCount(count + 1);
      }}>click
      </Button>
      <CountContext.Provider value={count}>
        <ShowCount/>
      </CountContext.Provider>
    </div>
  );
};

export default UseContextDemo;
