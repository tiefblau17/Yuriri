import { SettingActions, SET_RESOLUTION } from '../actions/types';
import { SettingState } from '../storeState';

const setting = (state: SettingState = {resolution: ''}, action: SettingActions) => {
  switch (action.type) {
    case SET_RESOLUTION:
      return {
        ...state,
        resolution: action.resolution
      }
    default:
      return state
  }
}

export default setting;