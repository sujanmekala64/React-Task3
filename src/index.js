import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));   //This root is linked with the root in public index.html
root.render(
    <App />
);   //Whatever we write in render that will take place 