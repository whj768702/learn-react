import React from 'react';
import { ThemeContext } from './themeContext';

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {(cxt) => (
        <button onClick={cxt.toggleTheme} style={{ backgroundColor: cxt.theme.background }}>
          Toggle Theme 点击
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
