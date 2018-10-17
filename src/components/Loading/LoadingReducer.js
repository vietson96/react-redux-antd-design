// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'

// ------------------------------------
// Actions
// ------------------------------------
export function showLoading () {
  return {
    type: SHOW_LOADING
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function hideLoading () {
  return {
    type: HIDE_LOADING
  }
}

export const actions = {
  showLoading,
  hideLoading
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SHOW_LOADING]: (state, action) => ({ ...state, isloading: true }),
  [HIDE_LOADING]: (state, action) => ({ ...state, isloading: false })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isloading: false
}
export default function loadingReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
