// LIBRARY
import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

// REDUCER
import rootReducer from './modules';

// HISTORY
export const history = createBrowserHistory();

// MIDDLEWARE
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

// STORE
const store = createStore(rootReducer, enhancer);

export default store;
