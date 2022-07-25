import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Button from './components/Button'
import RendCond from './components/RendCond';
import RendCond2 from './components/RendCond2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Button />
    <RendCond />
    <RendCond2 />
  </React.StrictMode>
);

