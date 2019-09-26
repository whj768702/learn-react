import React from 'react';
import Buttons from './button';
import ShowArea from './showArea';
import { Color } from './color';

function ReducerDemo () {
    return (
        <div>
            <Color>
                <ShowArea/>
                <Buttons/>
            </Color>
        </div>
    );
}

export default ReducerDemo;
