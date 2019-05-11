import React, { useState } from 'react';

class NameForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };
    handleSubmit = (event) => {
        alert(`提交的名字: ${this.state.value}`);
        event.preventDefault();
    };

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>名字: </label>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="提交"/>
            </form>
        );
    }
}

function NameFormFunction () {
    const [value, setValue] = useState('');

    function handleChange (event) {
        setValue(event.target.value);
    }

    function handleSubmit (event) {
        alert(`提交的名字: ${value}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>名字: </label>
            <input type="text" value={value} onChange={handleChange}/>
            <input type="submit" value="提交"/>
        </form>
    );
}

function FlavorFormFunction () {
    const [value, setValue] = useState('coconut');

    function handleChange (event) {
        setValue(event.target.value);
    }

    function handleSubmit (event) {
        alert(`最喜欢的风味是: ${value}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>选择喜欢的风味: </label>
            <select value={value} onChange={handleChange}>
                <option value="apple">苹果</option>
                <option value="orange">橙子</option>
                <option value="mango">芒果</option>
            </select>
            <input type="submit" value="提交"/>
        </form>
    );
}

export { NameForm, NameFormFunction, FlavorFormFunction };
