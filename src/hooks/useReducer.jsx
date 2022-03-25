import React, { useReducer } from 'react';
import { Button } from 'antd';

function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add': {
        return state + 1;
      }
      case 'sub': {
        return state - 1;
      }
      default: {
        return state;
      }
    }
  }, 0);
  return (
    <div>
      <h2>现在的分数是{count}</h2>
      <Button
        onClick={() => {
          dispatch('add');
        }}>
        add
      </Button>
      <Button
        onClick={() => {
          dispatch('sub');
        }}>
        sub
      </Button>
    </div>
  );
}
export default ReducerDemo;
