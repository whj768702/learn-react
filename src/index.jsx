import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './router';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>;
  </React.StrictMode>
);