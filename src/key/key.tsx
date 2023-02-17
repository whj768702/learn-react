import React from 'react';

type PropsType = {
  numbers: number[];
}

class NumberListClass extends React.Component<PropsType> {
  render() {
    const numbers = this.props.numbers;

    const listItems = numbers.map((number) => {
      return <li key={number.toString()}>{number}</li>;
    });
    return <ul>{listItems}</ul>;
  }
}

function NumberListFunction(props: PropsType) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => {
    return <li key={number.toString()}>{number}</li>;
  });
  return <ul>{listItems}</ul>;
}

export { NumberListClass, NumberListFunction };
