import { SettingActions, SET_RESOLUTION, SET_TEXTSPEED, SET_AUTOMODESPEED, SET_SYSTEMVOLUME, SET_CHARACTERVOLUME, SET_SEVOLUME } from '../actions/types';
import { SettingState } from '../storeState';

const initialState = {
  resolution: '',
  textSpeed: 1,
  autoModeSpeed: 1,
  systemVolume: 1,
  characterVolume: 1,
  seVolume: 1
}

const setting = (state: SettingState = initialState, action: SettingActions) => {
  switch (action.type) {
    case SET_RESOLUTION:
      return {
        ...state,
        resolution: action.resolution
      }
    case SET_TEXTSPEED:
      return {
        ...state,
        textSpeed: action.textSpeed
      }
    case SET_AUTOMODESPEED:
      return {
        ...state,
        autoModeSpeed: action.autoModeSpeed
      }
    case SET_SYSTEMVOLUME:
      return {
        ...state,
        systemVolume: action.systemVolume
      }
    case SET_CHARACTERVOLUME:
      return {
        ...state,
        characterVolume: action.characterVolume
      }
    case SET_SEVOLUME:
      return {
        ...state,
        seVolume: action.seVolume
      }
    default:
      return state
  }
}

export default setting;