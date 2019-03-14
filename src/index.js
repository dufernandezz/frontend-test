import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/index.scss';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
