import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_PRODUCT_LIST_SUCCESS = 'GET_PRODUCT_LIST_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return (dispatch, getState) => {
    // const { app } = getState()
    axios.get('/api/products')
      .then(function (response) {
        console.log(response);
        dispatch(getProductSuccess(response.data.ProductList))
      }).catch(function (error) {
      console.log(error)
    })
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function getProductSuccess (products) {
  return {
    type: GET_PRODUCT_LIST_SUCCESS,
    products
  }
}

export const actions = {
  increment
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_PRODUCT_LIST_SUCCESS]    : (state, action) => ({ ...state, products: action.products }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  products: []
}
export default function productReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
