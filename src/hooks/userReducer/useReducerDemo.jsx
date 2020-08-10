import React, { useReducer } from 'react';
import { Button } from 'antd';

const UseReducerDemo = () => {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add': {
        return state + 1;
      }
      case 'sub': {
        return state - 1;
      }
      default:
        return state;
    }
  }, 0);

  return (
    <div>
      <h2>current value: {count}</h2>
      <Button
        onClick={() => {
          dispatch({ type: 'add' });
        }}
      >
        add
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: 'sub' });
        }}
      >
        sub
      </Button>
    </div>
  );
};

export default UseReducerDemo;
