import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_SYSTEM_LIST_SUCCESS = 'GET_SYSTEM_LIST_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export function getList (params) {
  return (dispatch, getState) => {
    axios({
      method: 'get',
      url: '/systems',
      params: params
    }).then(function (response) {
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
  getList
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
