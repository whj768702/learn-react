import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import './App.css';
import Game from './game/game';
import MyApp from './welcome/welcome';
import { Clock, MyClock } from './clock/clock';
import { NumberListClass, NumberListFunction} from './key/key';
import Toggle from './event/event';
import { FlavorFormFunction, NameForm, NameFormFunction } from './form/form';
import Calculator from './liftingStateUp/Calculator';
import ContextDemo from './context/contextDemo';
import RefComponent from './ref/ref';
import ReversedName from './higherOrderComponent/higherOderComponent';
import MouseTracker from './renderProps/renderProps';

// import Example from './composition/composition'

const Example = React.lazy(() => import('./composition/composition'));

function App () {
    const numbers = [1, 2, 3, 4, 5];
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
                </ul>
                <Route path="/Game" component={Game} />
                <Route path="/MyApp" render={() => <MyApp names={names} />} />
                <Route path="/Clock" component={Clock} />
                <Route path="/MyClock" component={MyClock} />
            </div>
        </Router>
    );
    // return (
    //     <div className="App">
    //         <div>
    //             <Game/>
    //         </div>
    //         <div><MyApp names={names}/></div>
    //         <div><Clock/></div>
    //         <div><MyClock/></div>
    //         <div><Toggle/></div>
    //         <div><NumberListClass numbers={numbers}/></div>
    //         <div><NumberListFunction numbers={numbers}/></div>
    //         <div><NameForm/></div>
    //         <div><NameFormFunction/></div>
    //         <div><FlavorFormFunction/></div>
    //         <div><Calculator/></div>
    //         <div >
    //             <Suspense fallback={
    //                 <div>loading...</div>
    //             }>
    //                 <Example/>
    //             </Suspense>
    //         </div>
    //         <div>
    //             <ContextDemo />
    //         </div>
    //         <div>
    //             <RefComponent />
    //         </div>
    //         <div>
    //             <ReversedName children={'123456'}/>
    //         </div>
    //         <div>
    //             <MouseTracker/>
    //         </div>
    //     </div>
    // );
}

export default App;
