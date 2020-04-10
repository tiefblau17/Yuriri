import { SET_RESOLUTION, SET_TEXTSPEED, SET_AUTOMODESPEED, SET_SYSTEMVOLUME, SET_CHARACTERVOLUME, SET_SEVOLUME } from './types';

export interface SetResolutionAction {
  type: typeof SET_RESOLUTION;
  resolution: string
}

export interface SetTextSpeedAction {
  type: typeof SET_TEXTSPEED;
  textSpeed: number
}

export interface SetAutoModeSpeedAction {
  type: typeof SET_AUTOMODESPEED;
  autoModeSpeed: number
}

export interface SetSystemVolumeAction {
  type: typeof SET_SYSTEMVOLUME;
  systemVolume: number
}

export interface SetCharacterVolumeAction {
  type: typeof SET_CHARACTERVOLUME;
  characterVolume: number
}

export interface SetSeVolumeAction {
  type: typeof SET_SEVOLUME;
  seVolume: number
}

export function setResolution(resolution: string): SetResolutionAction {
  return {
    type: SET_RESOLUTION,
    resolution
  }
}

export function setTextSpeed(textSpeed: number): SetTextSpeedAction {
  return {
    type: SET_TEXTSPEED,
    textSpeed
  }
}

export function setAutoModeSpeed(autoModeSpeed: number): SetAutoModeSpeedAction {
  return {
    type: SET_AUTOMODESPEED,
    autoModeSpeed
  }
}

export function setSystemVolume(systemVolume: number): SetSystemVolumeAction {
  return {
    type: SET_SYSTEMVOLUME,
    systemVolume
  }
}

export function setCharacterVolume(characterVolume: number): SetCharacterVolumeAction {
  return {
    type: SET_CHARACTERVOLUME,
    characterVolume
  }
}

export function setSeVolume(seVolume: number): SetSeVolumeAction {
  return {
    type: SET_SEVOLUME,
    seVolume
  }
}