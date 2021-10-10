import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//  importing resolve from path module 

//console.log("weather key ", process.env.REACT_APP_NOT_SECRET_CODE);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

