import React, { createContext, useContext, useState } from 'react';
// import ShowContent from '../../ShowContent/ShowContent';
import { Button } from 'antd';

/**
 * accepts a context object(the value returned from React.createContext) and
 * returns the current context value for that context.
 */

// object
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};
const ThemeContext = createContext(themes.light);

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <Button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </Button>
  );
}

const CountContext = createContext(0);
function ShowCount() {
  let count = useContext(CountContext);
  return <h2>child: value from parent: {count}</h2>;
}

// 父子组件间传值
const UseContextDemo = () => {
  const [count, setCount] = useState(0);

  const [theme, setTheme] = useState(themes.light);
  const changeTheme = (prev) => {
    console.log('theme: ', prev);
    if (prev.background === '#eeeeee') {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  const border = {
    border: '1px solid red',
  };

  return (
    <div>
      <div style={border}>
        <p>parent: clicked {count} times</p>
        <Button
          type="primary"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          click
        </Button>
        <br />
        <CountContext.Provider value={count}>
          <ShowCount />
        </CountContext.Provider>
      </div>

      <div style={border}>
        <ThemeContext.Provider value={theme}>
          <ThemedButton />
        </ThemeContext.Provider>
        <br />
        <Button type="primary" onClick={() => changeTheme(theme)}>
          change theme
        </Button>
      </div>
    </div>
  );
};

export default UseContextDemo;
