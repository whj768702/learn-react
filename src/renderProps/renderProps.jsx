import React from 'react';

class MoveMouse extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <div style={{ position: 'absolute', left: mouse.x, top: mouse.y }}>
        <span>I am here.</span>
      </div>
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: '100px', border: '1px solid black' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render={(mouse) => <MoveMouse mouse={mouse} />} />
      </div>
    );
  }
}

export default MouseTracker;
