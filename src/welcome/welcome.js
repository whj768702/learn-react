import React from 'react';

function Welcome (props) {
    return (<span>hello, {props.name}</span>);
}

function MyApp (props) {
    function renderWelcome (name) {
        return (
            <Welcome name={name}/>
        );
    }

    let target = [];
    for (let i = 0; i < props.names.length; i++) {
        target.push(renderWelcome(props.names[i]));
    }

    return (
        <div>{target}</div>
    );
}
export default MyApp;
