// ------------------------------------
// Constants
// ------------------------------------
export const RESET_APP_STATE = 'RESET_APP_STATE'
export const UPDATE_APP_STATE = 'UPDATE_APP_STATE'

// ------------------------------------
// Actions
// ------------------------------------
export function updateAppState(userData) {
  return {
    type: UPDATE_APP_STATE,
    userData
  }
}


export const actions = {
  updateAppState
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RESET_APP_STATE]: (state, action) => ({
    ...state,
    acceptToken: action.payload && action.payload.acceptToken ? action.payload.acceptToken : null,
    refreshToken: action.payload && action.payload.refreshToken ? action.payload.refreshToken : null,
    userData: action.payload && action.payload.userData ? action.payload.userData : {}
  }),
  [UPDATE_APP_STATE]: (state, action) => ({
    ...state,
    acceptToken: action.userData && action.userData.access_token ? action.userData.access_token : null,
    refreshToken: action.userData && action.userData.refreshToken ? action.userData.refreshToken : null,
    userData: action.userData ? action.userData : {}
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  acceptToken: null,
  refreshToken: null,
  userData: {}
}
export default function appReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
