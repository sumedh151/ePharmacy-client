import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();
const initialState = {};

export const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        // To be removed in deployment
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);