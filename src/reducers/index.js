import { combineReducers } from 'redux'
import userInfo from './userReducer'
import allBandsInfo from './allBandsReducer'
import bands from './bandArtistsReducer'

// if more reducers are created I can bundle them up here
export default combineReducers({
  userInfo, allBandsInfo, bands
})
