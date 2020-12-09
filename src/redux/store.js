import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { middlewares } from './middlewares';

export const store = createStore(reducers, applyMiddleware(middlewares) );