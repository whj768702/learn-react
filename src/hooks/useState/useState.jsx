import React, {useState} from 'react';

import {Button} from "antd";

const UseStateDemo = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>clicked {count} times.</p>
            <Button type="primary" size="middle" onClick={() => {
                setCount(count + 1);
            }}>click</Button>
        </div>
    );
};

export default UseStateDemo;
