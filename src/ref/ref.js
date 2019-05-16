import React from 'react';

// function FormInput(props) {
//   const textInput = React.createRef();
//   const hasText = () => {
//     return textInput.current.value.length > 0;
//   }
//   const selectInputText = () => {
//     textInput.current.select();
//   }
//   return (
//     <div>
//       <input type="text" ref={textInput}/>
//     </div>
//   );
// }
class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  hasText() {
    return this.textInput.current.value.length > 0;
  }

  selectInputText() {
    this.textInput.current.select();
  }

  render () {
    return (
      <div>
        <input type="text" ref={this.textInput} />
      </div>
    );
  }
}

const RefComponent = (props) => {
  const formInput = React.createRef();

  const inputSelection = () => {
    const input = formInput.current;

    if (input.hasText()) {
      input.selectInputText();
    }
  };

  return (
    <div>
      <button type="button" onClick={inputSelection}>Select Input</button>
      <FormInput ref={formInput} />
    </div>
  );
}

export default RefComponent;