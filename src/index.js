import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/style.css';
//import './assets/css/index.css';
//import App from './App';

//import C1 from './components/C1.js';
//import C2 from './components/C2.js';
//import SetTime from './components/SetTime.js';
import Routers from './router'

import * as serviceWorker from './serviceWorker.js';

ReactDOM.render(<Routers />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
