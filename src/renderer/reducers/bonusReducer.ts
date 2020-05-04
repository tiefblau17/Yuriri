import { BonusActions, BONUS_SHOW } from '../actions/types';
import { BonusState } from '../storeState';

const initialState = {
  show: false,
  discoveredMusic: [false],
  discoveredPictures: [false],
  discoveredVideos: [false]
}

const bonus = (state: BonusState = initialState, action: BonusActions) => {
  switch (action.type) {
    case BONUS_SHOW:
      return {
        ...state,
        resolution: action.show
      }
    default:
      return state
  }
}

export default bonus;