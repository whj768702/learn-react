import React, {useReducer} from 'react';

function ReducerDemo () {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add': {
                return state + 1;
            }
            case 'sub': {
                return state - 1;
            }
            default: {
                return state;
            }
        }
    }, 0);
    return (
        <div>
            <h2>现在的分数是{count}</h2>
            <button onClick={()=>{dispatch('add')}}>add</button>
            <button onClick={()=>{dispatch('sub')}}>sub</button>
        </div>
    )
}
export default ReducerDemo
