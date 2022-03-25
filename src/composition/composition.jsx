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
    <div className='mt-8 flex'>
      <div className="left w-40">
        <span>左侧</span>
        {props.left}
      </div>
      <div className="right w-40">
        <span>右侧</span>
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
    <>
      <h3>下面两个通过props传入组件</h3>
      <SplitPane
        left={<Contacts />}
        right={<Chat />} />
    </>
  );
}

export default Example;