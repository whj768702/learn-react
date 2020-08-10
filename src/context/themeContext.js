import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    fontColor: 'black',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    fontColor: 'white',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
