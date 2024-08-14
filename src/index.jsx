import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
import './index.css';
import Homepage from './HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);

// ReactDOM.render(<App/>, document.getElementById('root'));
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<Homepage />);
// ReactDOM.render(<Homepage />, document.getElementById('root'));
