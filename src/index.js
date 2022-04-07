import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Homepage from './homePage';

// ReactDOM.render(<App/>, document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Homepage />);
// ReactDOM.render(<Homepage />, document.getElementById('root'));
