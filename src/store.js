import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducer/reducer'
import promise from 'redux-promise-middleware';

// store documentation
// https://redux.js.org/api/createstore

// Basic Store with one reducer
// const store = createStore(reducer)



// setup with redux devtools documentation
// https://github.com/zalmoxisus/redux-devtools-extension

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(promise)))

export default store