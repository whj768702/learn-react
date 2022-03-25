import React from 'react';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.childrend}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">hello.</p>
    </FancyBorder>
  );
}

function SplitPane(props) {
  return (
    <div>
      <div className="left">
        {props.left}
      </div>
      <div className="right">
        {props.right}
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div>
      <span>'Contacts'</span>
    </div>
  );
}

function Chat() {
  return (
    <div>
      <span>'Chat'</span>
    </div>
  );
}

function Example() {
  return (
    <SplitPane
      left={<Contacts />}
      right={<Chat />}
    ></SplitPane>
  );
}

export default Example;