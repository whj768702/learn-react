import React, { useContext } from 'react';
import { ColorContext, UPDATE_COLOR } from './color';
import { Button } from 'antd';

function Buttons() {
  // 使用共享的状态
  const { color, dispatch } = useContext(ColorContext);
  console.log('dispatch: ', dispatch);
  console.log('color: ', color);
  return (
    <div>
      <Button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: 'red' });
        }}
      >
        红色
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: 'yellow' });
        }}
      >
        黄色
      </Button>
    </div>
  );
}

export default Buttons;
