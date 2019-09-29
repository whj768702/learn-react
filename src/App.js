import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Game from './game/game';
import MyApp from './welcome/welcome';
import { Clock, MyClock } from './clock/clock';
import ContextDemo from './context/contextDemo';
import ReducerDemo from './hooks/userReducer/useReducer';
import useMemoDemo from './hooks/useMemo/useMemo';

// const Example = React.lazy(() => import('./composition/composition'));

function App () {
    // const numbers = [1, 2, 3, 4, 5];
    const names = ['ni', 'hao', 'ma'];

    return (
        <Router>
            <div className="App">
                <ul>
                    <li>
                        <Link to="/Game">Game</Link>
                    </li>
                    <li>
                        <Link to="/MyApp">MyApp</Link>
                    </li>
                    <li>
                        <Link to="/clock">clock</Link>
                    </li>
                    <li>
                        <Link to="/MyClock">MyClock</Link>
                    </li>
                    <li>
                        <Link to="/Toggle">Toggle</Link>
                    </li>
                    <li>
                        <Link to="/Context">ContextDemo</Link>
                    </li>
                    <li>
                        <Link to="/useReducer">useReducer</Link>
                    </li>
                    <li>
                        <Link to="/useMemo">useMemo</Link>
                    </li>
                </ul>
                <Route path="/Game" component={Game}/>
                <Route path="/MyApp" render={() => <MyApp names={names}/>}/>
                <Route path="/Clock" component={Clock}/>
                <Route path="/MyClock" component={MyClock}/>
                <Route path="/Context" component={ContextDemo}/>
                <Route path="/useReducer" component={ReducerDemo}/>
                <Route path="/useMemo" component={useMemoDemo}/>
            </div>
        </Router>
    );
}

export default App;
