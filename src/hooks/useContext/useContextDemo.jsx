import React, {createContext, useContext, useState} from 'react';
import ShowContent from '../../ShowContent/ShowContent';

const CountContext = createContext();

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
      <button onClick={() => {
        setCount(count + 1);
      }}>click
      </button>
      <CountContext.Provider value={count}>
        <ShowCount/>
      </CountContext.Provider>
    </div>
  );
};

export default UseContextDemo;
