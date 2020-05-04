import { BONUS_SHOW }  from './types';

export interface ShowBonusAction {
  type: typeof BONUS_SHOW
  show: boolean
}

export function showBonus(show: boolean): ShowBonusAction {
  return {
    type: BONUS_SHOW,
    show
  }
}