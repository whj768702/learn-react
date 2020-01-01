import React, {useContext} from 'react';
import {ColorContext, UPDATE_COLOR} from './color';

function Buttons() {
  // 使用共享的状态
  const {color, dispatch} = useContext(ColorContext);
  console.log("dispatch: ", dispatch);
  console.log("color: ", color);
  return (
    <div>
      <button onClick={() => {
        dispatch({type: UPDATE_COLOR, color: 'red'});
      }}>红色
      </button>
      <button onClick={() => {
        dispatch({type: UPDATE_COLOR, color: 'yellow'});
      }}>黄色
      </button>
    </div>
  );
}

export default Buttons;
