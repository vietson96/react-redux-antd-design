import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_SYSTEM_LIST_SUCCESS = 'GET_SYSTEM_LIST_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return (dispatch, getState) => {
    axios.get(`/systems`)
      .then(function (response) {
        console.log(response.data)
        dispatch(getSystemSuccess(response.data))
        return response.data
      }).catch(function (error) {
        console.log(error)
      })
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function getSystemSuccess (systems) {
  return {
    type: GET_SYSTEM_LIST_SUCCESS,
    systems
  }
}

export const actions = {
  increment
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_SYSTEM_LIST_SUCCESS]    : (state, action) => ({ ...state, systems: action.systems }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  systems: []
}
export default function systemsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
