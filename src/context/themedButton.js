import React from 'react';
import { ThemeContext } from './themeContext';

class ThemedButton extends React.Component{
  render() {
    let props = this.props;
    let theme = this.context;

    return (
      <button 
        {...props}
        style={{backgroundColor: theme.backgroundColor}}
      ></button>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;