import React from 'react';

function Welcome(props) {
  return <span>hello, {props.name}</span>;
}

function MyApp(props) {
  function renderWelcome(name, index) {
    return (
      <>
        <Welcome key={index} name={name} />;
        <br />
      </>
    );
  }

  const target = [];
  for (let i = 0; i < props.names.length; i++) {
    target.push(renderWelcome(props.names[i], i));
  }

  return <div>{target}</div>;
}
export default MyApp;
