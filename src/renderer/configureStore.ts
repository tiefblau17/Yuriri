import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers';

//TODO Load states for file
export const initialState = {
  setting: {
    resolution: '720',
    textSpeed: 50,
    autoModeSpeed: 50,
    systemVolume: 50
  }
}

export default function configureStore() {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);
  // @ts-ignore
  const store = createStore(rootReducer, initialState, composedEnhancers);
  return store;
}