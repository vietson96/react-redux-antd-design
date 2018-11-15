import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_SYSTEM_LIST_SUCCESS = 'GET_SYSTEM_LIST_SUCCESS'
export const GET_SYSTEM_DETAIL_SUCCESS = 'GET_SYSTEM_DETAIL_SUCCESS'

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

export function getDetail (id) {
  return (dispatch, getState) => {
    axios({
      method: 'get',
      url: `/systems/${id}`,
    }).then(function (response) {
      console.log(response.data)
      dispatch(getSystemDetailSuccess(response.data))
      return response.data
    }).catch(function (error) {
      console.log(error)
    })
  }
}

export function save (data) {
  return (dispatch, getState) => {
    axios.put(`/systems`, data,
    ).then(function (response) {
      console.log(response)
      return response
    }).catch(function (error) {
      console.log(error)
    })
  }
}

export function create (data) {
  return (dispatch, getState) => {
    axios.post(`/systems`, data
    ).then(function (response) {
      console.log(response)
      return response
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

export function getSystemDetailSuccess (systems) {
  return {
    type: GET_SYSTEM_DETAIL_SUCCESS,
    systems
  }
}

export const actions = {
  getList,
  getDetail
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_SYSTEM_LIST_SUCCESS]    : (state, action) => ({ ...state, systems: action.systems }),
  [GET_SYSTEM_DETAIL_SUCCESS]    : (state, action) => ({ ...state, systems: action.systems }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  systems: [],
}
export default function systemsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
