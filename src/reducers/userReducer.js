import {GET_USER_BAND_INFO} from '../actions/types'

export default function userInfo (state = null, action) {
  // eslint-disable-next-line
  switch (action.type) {
    case GET_USER_BAND_INFO:
      return action.payload
  }
  return state
}
