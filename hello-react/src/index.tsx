import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);

setInterval(() => {
  root.render(
   // <React.StrictMode>
      <App />
   // </React.StrictMode>,
  );
}, 1000);
