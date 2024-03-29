import React from 'react';
import { ThemeContext, themes } from './themeContext';
// import ThemedButton from './themedButton';
import ThemeTogglerButton from './themeTogglerButton';

// function Toolbar(props) {
//   return (
//     <ThemedButton onClick={props.changeTheme}>
//       change theme
//     </ThemedButton>
//   );
// }

class ContextDemo extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default ContextDemo;
