export interface SettingState {
  resolution: string
  textSpeed: number
  autoModeSpeed: number
  systemVolume: number
  characterVolume: number
  seVolume: number
}

export interface BonusState {
  show: boolean
  discoveredMusic: boolean[]
  discoveredPictures: boolean[]
  discoveredVideos: boolean[]
}

export default interface StoreState {
  bonus: BonusState
  setting: SettingState
}