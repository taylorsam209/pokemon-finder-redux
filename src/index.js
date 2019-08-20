import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux imports
import { Provider } from 'react-redux';
import store from './store'

ReactDOM.render(
    
    // Wrap the entire app with the provider tag
    // This gives the app access to the store 
    // Provider takes one property which is the store

    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));
serviceWorker.unregister();
