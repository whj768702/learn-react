import React, { createContext, useReducer } from 'react';

/*
状态共享的文件
 */

// 用来在组件中共享的
export const ColorContext = createContext({});

export const UPDATE_COLOR = 'UPDATE_COLOR';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR: {
      return action.color;
    }
    default: {
      return state;
    }
  }
};

export const Color = (props) => {
  const [color, dispatch] = useReducer(reducer, 'blue');

  // 共享的状态中传递dispatch和color值
  return (
    <ColorContext.Provider value={{ color, dispatch }}>{props.children}</ColorContext.Provider>
  );
};
