import { combineReducers } from 'redux';
import setting from './settingReducer';
import bonus from './bonusReducer';

export default combineReducers({
  bonus,
  setting
});