import React from 'react';

import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const domNode = document.getElementById('root');

if (window.isServerRendered) {
  hydrateRoot(domNode, (
    <React.StrictMode>
      <BrowserRouter basename={process.env.REACT_APP_BASE_NAME || ''}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  ));
} else {
  const root = createRoot(domNode);
  root.render(
    <React.StrictMode>
      <BrowserRouter basename={process.env.REACT_APP_BASE_NAME || ''}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
