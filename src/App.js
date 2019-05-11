import React from 'react';
import './App.css';
import Game from './game/game';
import MyApp from './welcome/welcome';
import { Clock, MyClock } from './clock/clock';
import { NumberListClass, NumberListFunction} from './key/key';
import Toggle from './event/event';

function App () {
    const numbers = [1, 2, 3, 4, 5];
    const names = ['ni', 'hao', 'ma'];

    return (
        <div className="App">
            <div>
                <Game/>
            </div>
            <div><MyApp names={names}/></div>
            <div><Clock/></div>
            <div><MyClock/></div>
            <div><Toggle/></div>
            <div><NumberListClass numbers={numbers}/></div>
            <div><NumberListFunction numbers={numbers}/></div>
        </div>
    );
}

export default App;
