import React from 'react';
import { ThemeContext } from './themeContext';
import { Button } from 'antd';

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {(cxt) => (
        <Button
          onClick={cxt.toggleTheme}
          style={{ backgroundColor: cxt.theme.background, color: cxt.theme.fontColor }}
        >
          Toggle Theme 点击
        </Button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
