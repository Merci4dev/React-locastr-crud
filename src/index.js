import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

// to avoid tha the app load before to read the localsterage
root.render(
  <App />
);

