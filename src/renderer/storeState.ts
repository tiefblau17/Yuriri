export interface SettingState {
  resolution: string
  textSpeed: number
  autoModeSpeed: number
  systemVolume: number
  characterVolume: number
  seVolume: number
}

export default interface StoreState {
  setting: SettingState
}