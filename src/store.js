import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducer/reducer'
import promise from 'redux-promise-middleware';

// store documentation
// https://redux.js.org/api/createstore

// BASIC STORE WITH ONE REDUCER
// const store = createStore(reducer)


// STORE WITH REDUCER AND MIDDLEWARE
// const store = createStore(
//     reducer,
//     applyMiddleware(promise, anotherMiddleware, etc)
//   )


// setup with redux devtools documentation
// https://github.com/zalmoxisus/redux-devtools-extension


//store with middleware and redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(promise)))

export default store