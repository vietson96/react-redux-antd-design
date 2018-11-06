import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_PROFILE_LIST_SUCCESS = 'GET_PROFILE_LIST_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return (dispatch, getState) => {
    const { app } = getState()
    axios.get(`/users/${app.userData.userId}`)
      .then(function (response) {
        console.log(response.data)
        dispatch(getProfileSuccess(response.data))
      }).catch(function (error) {
        console.log(error)
      })
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function getProfileSuccess (profile) {
  return {
    type: GET_PROFILE_LIST_SUCCESS,
    profile
  }
}

export const actions = {
  increment
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_PROFILE_LIST_SUCCESS]    : (state, action) => ({ ...state, profile: action.profile }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  profile: []
}
export default function profileReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
