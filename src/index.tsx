import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/index.scss';
import { App } from './Containers';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
