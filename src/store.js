import { createStore, applyMiddleware } from 'redux';

import { messageReducer } from './reducer';

export default createStore(messageReducer);