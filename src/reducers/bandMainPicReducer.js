import {GET_BAND_MAIN_PIC} from '../actions/types'

export default function getBandMainPic (state = {}, action) {
  switch (action.type) {
    case GET_BAND_MAIN_PIC:
      return {
        ...state,
        pic: action.payload
      }
    default:
      return state
  }
}
