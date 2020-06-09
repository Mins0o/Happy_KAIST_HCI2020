import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Select from './container/selectpage';
import Login from './container/loginpage';
import * as serviceWorker from './serviceWorker';

export { default as Select } from './container/selectpage';
export { default as Loginpage } from './container/loginpage';

ReactDOM.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
