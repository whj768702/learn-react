import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className='flex flex-col items-center'>
        <h1>class组件</h1>
        <h4>it is {this.state.date.toLocaleString()}</h4>
      </div>
    );
  }
}


export default Clock;
