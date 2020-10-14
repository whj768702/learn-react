import React, {useContext} from 'react';

import {Button} from "antd";

import {ColorContext, UPDATE_COLOR} from './color';

function Buttons() {
    // 使用共享的状态
    const {color, dispatch} = useContext(ColorContext);
    console.log("dispatch: ", dispatch);
    console.log("color: ", color);
    return (
        <div>
            <Button type='primary' onClick={() => {
                dispatch({type: UPDATE_COLOR, color: 'red'});
            }}>红色
            </Button>
            <Button style={{marginLeft:'4px'}} type='primary' onClick={() => {
                dispatch({type: UPDATE_COLOR, color: 'yellow'});
            }}>黄色
            </Button>
        </div>
    );
}

export default Buttons;
