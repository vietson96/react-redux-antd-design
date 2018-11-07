import { browserHistory } from 'react-router'
import axios from 'axios'
import { message } from 'antd'

import { updateAppState } from '../../../components/AppReducer'
import { showLoading, hideLoading } from '../../../components/Loading/LoadingReducer'

// ------------------------------------
// Constants
// ------------------------------------
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_ERROR = 'SIGNIN_ERROR'
export const SIGNIN_RUNNING = 'SIGNIN_RUNNING'

// ------------------------------------
// Actions
// ------------------------------------
export function signIn (user) {
  return (dispatch, getState) => {
    const { signin } = getState()
    if (!signin.isRunning) {
      dispatch(signInRunning())
      dispatch(showLoading())
      var bodyFormData = new FormData()
      bodyFormData.set('username', user.username)
      bodyFormData.set('password', user.password)
      bodyFormData.set('grant_type', 'password')
      bodyFormData.set('client_id', 'a868cec2-5c40-4a90-b473-672f097e1695')
      // const dataParam = {
      //   username: user.username,
      //   password: user.password,
      //   grant_type: 'password',
      //   client_id: 'a868cec2-5c40-4a90-b473-672f097e1695'
      // };
      // debugger

      // axios.post('/token', bodyFormData,
      //   { headers: { 'Content-Type': 'multipart/form-data' } }
      // ).then(function (response) {
      //   setTimeout(() => {
      //     dispatch(signInSuccess(response.data))
      //     dispatch(updateAppState(response.data))
      //     dispatch(hideLoading())
      //     browserHistory.push('/')
      //   }, 2000)
      // }).catch(function (error) {
      //   setTimeout(() => {
      //     dispatch(signInError(error.response.data))
      //     dispatch(hideLoading())
      //   }, 2000)
      // })

      axios.post('/token', 'username=' + encodeURIComponent(user.username) +
        '&password=' + encodeURIComponent(user.password) +
        '&grant_type=password' +
        '&client_id=a868cec2-5c40-4a90-b473-672f097e1695',
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      ).then(function (response) {
        // setTimeout(() => {
        dispatch(signInSuccess(response.data))
        dispatch(updateAppState(response.data))
        dispatch(hideLoading())
        browserHistory.push('/')
        // }, 2000)
      }).catch(function (e) {
        // setTimeout(() => {
        message.error(e.response.data.error_description)
        dispatch(signInError(e.response.data.error_description))
        dispatch(hideLoading())
        // }, 2000)
      })
    }
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function signInSuccess (user) {
  return {
    type: SIGNIN_SUCCESS,
    user
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function signInRunning () {
  return {
    type: SIGNIN_RUNNING
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function signInError (message) {
  return {
    type: SIGNIN_ERROR,
    message
  }
}

export const actions = {
  signIn
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SIGNIN_SUCCESS]: function (state, action) {
    return { ...state, signInErrorMessage: '', isRunning: false }
  },
  [SIGNIN_ERROR]: function (state, action) {
    return { ...state, signInErrorMessage: action.message, isRunning: false }
  },
  [SIGNIN_RUNNING]: function (state, action) {
    return { ...state, isRunning: true }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  signInErrorMessage: '',
  isRunning: false,
}
export default function signinReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
