import { SetResolutionAction, SetTextSpeedAction, SetAutoModeSpeedAction, SetSystemVolumeAction, SetCharacterVolumeAction, SetSeVolumeAction } from '../actions/settingActions';

export const SET_RESOLUTION = 'SET_RESOLUTION';
export const SET_TEXTSPEED = 'SET_TEXTSPEED';
export const SET_AUTOMODESPEED = 'SET_AUTOMODESPEED';
export const SET_SYSTEMVOLUME = 'SET_SYSTEMVOLUME';
export const SET_CHARACTERVOLUME = 'SET_CHARACTERVOLUME';
export const SET_SEVOLUME = 'SET_SEVOLUME';

export type SettingActions = SetResolutionAction | SetTextSpeedAction | SetAutoModeSpeedAction | SetSystemVolumeAction | SetCharacterVolumeAction | SetSeVolumeAction;