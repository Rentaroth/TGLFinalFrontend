import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './App';
import { ContextProvider } from './context';
import { RouterProvider } from '@tanstack/react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
