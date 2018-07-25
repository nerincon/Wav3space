import axios from 'axios'
import {GET_USER_BAND_INFO, GET_ALL_BANDS_MAIN_PIC, GET_BAND_ARTISTS, GET_BAND_MAIN_PIC} from './types'

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : 'https://backendapiwav3space.herokuapp.com/api'

const axiosInstance = axios.create({
  baseURL: url
})

export const getUserBandInfo = () => dispatch => {
  axiosInstance.get('/bandinfo').then(res => {
    dispatch({type: GET_USER_BAND_INFO, payload: res.data})
  })
}

export const allBandsInfo = () => dispatch => {
  axiosInstance.get('/allbandsmain').then(res => {
    dispatch({type: GET_ALL_BANDS_MAIN_PIC, payload: res.data})
  })
}

export const getBandMainPic = (bandname) => dispatch => {
  axiosInstance.get('/bandmainpic/' + bandname).then(res => {
    dispatch({type: GET_BAND_MAIN_PIC, payload: res.data})
  })
}

// long way to do it... below is the short way by using the replace method history has.

// export const bandArtistsInfo = (bandname, history) => dispatch => {
//   axios.get('http://localhost:5000/api/bandartists/' + bandname).then(res => {
//     dispatch({type: GET_BAND_ARTISTS, payload: res.data})
//     if (window.location.href.indexOf('bandinfo/') !== -1) {
//       history.push(`${bandname}`)
//     } else {
//       history.push(`bandinfo/${bandname}`)
//     }
//   })
// }

// need to choose a better way to do this. replace is not a good idea because it will not have timeline and pressing back button in browser will not work.
export const bandArtistsInfo = (bandname, history) => dispatch => {
  axiosInstance.get('/bandartists/' + bandname).then(res => {
    dispatch({type: GET_BAND_ARTISTS, payload: res.data})
    // history.replace(`/bandinfo/${bandname}`)
    if (window.location.href.indexOf('bandinfo/') !== -1) {
      history.push(`${bandname}`)
    } else {
      history.push(`bandinfo/${bandname}`)
    }
  })
}
