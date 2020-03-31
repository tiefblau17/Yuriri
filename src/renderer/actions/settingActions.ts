import { SET_RESOLUTION } from './types';

export interface SetResolutionAction {
  type: typeof SET_RESOLUTION;
  resolution: string
}

export function setResolution(resolution: string): SetResolutionAction {
  return {
    type: SET_RESOLUTION,
    resolution
  }
}