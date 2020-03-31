import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers';
import StoreState, { SettingState } from './storeState';

//TODO Load states for file
export const initialState = {
  setting: {
    resolution: '720'
  }
};

export default function configureStore() {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);
  // @ts-ignore
  const store = createStore(rootReducer, initialState, composedEnhancers);
  return store;
}