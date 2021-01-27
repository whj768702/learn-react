import React from 'react';

class NumberListClass extends React.Component {
  render() {
    const numbers = this.props.numbers;

    const listItems = numbers.map((number) => {
      return <li key={number.toString()}>{number}</li>;
    });
    return <ul>{listItems}</ul>;
  }
}

function NumberListFunction(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => {
    return <li key={number.toString()}>{number}</li>;
  });
  return <ul>{listItems}</ul>;
}

export { NumberListClass, NumberListFunction };
