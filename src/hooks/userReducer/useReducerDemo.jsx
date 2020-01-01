import React, {useReducer} from 'react';

const UseReducerDemo = () => {
  const [count, dispatch] = useReducer((state, action)=> {
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
      <button onClick={() => {dispatch({type: 'add'})}}>add</button>
      <button onClick={() => {dispatch({type: 'sub'})}}>sub</button>
    </div>
  );
};

export default UseReducerDemo;
