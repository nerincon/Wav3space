import {GET_ALL_BANDS_MAIN_PIC} from '../actions/types'

export default function allBandsInfo (state = {}, action) {
  switch (action.type) {
    case GET_ALL_BANDS_MAIN_PIC:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}
