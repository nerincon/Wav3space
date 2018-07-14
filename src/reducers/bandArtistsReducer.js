import {GET_BAND_ARTISTS} from '../actions/types'

export default function bandArtistsInfo (state = {}, action) {
  switch (action.type) {
    case GET_BAND_ARTISTS:
      return {
        ...state,
        band: action.payload
      }
    default:
      return state
  }
}
