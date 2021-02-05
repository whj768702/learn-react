import React, { useState, useEffect } from 'react';

class Clock extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount () {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount () {
        clearInterval(this.timerID);
    }

    tick () {
        this.setState({
            date: new Date()
        });
    }

    render () {
        return (
            <div>
                <h1>class组件</h1>
                <h2>it is {this.state.date.toLocaleString()}</h2>
            </div>
        );
    }
}

function MyClock () {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => setDate(new Date()), 1000);
        return function () {
            clearInterval(timerID);
        };
    });
    return (
        <div>
            <h1>函数式组件</h1>
            <h2>it is {date.toLocaleString()}</h2>
        </div>
    );
}

export { Clock, MyClock };
