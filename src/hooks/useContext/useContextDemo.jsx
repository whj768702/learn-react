import { Button } from "antd";
import { createContext, useContext, useState } from "react";

/**
 * accepts a context object(the value returned from React.createContext) and
 * returns the current context value for that context.
 */

// object
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
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
  const count = useContext(CountContext);
  return <h2>child: value from parent: {count}</h2>;
}

// 父子组件间传值
const UseContextDemo = () => {
  const [count, setCount] = useState(0);

  const [theme, setTheme] = useState(themes.light);
  const changeTheme = (prev) => {
    console.log("theme: ", prev);
    if (prev.background === "#eeeeee") {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  return (
    <div>
      <div className="p-4 border-solid border-[1px] border-red-700">
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

      <div className="mt-8 p-4 border-solid border-[1px] border-red-700">
        <ThemeContext.Provider value={theme}>
          <ThemedButton />
        </ThemeContext.Provider>
        <br />
        <Button
          className="mt-2"
          type="primary"
          onClick={() => changeTheme(theme)}
        >
          change theme
        </Button>
      </div>
    </div>
  );
};

export default UseContextDemo;
