import { combineReducers } from 'redux'
import locationReducer from './location'
import loadingReducer from '../components/Loading/LoadingReducer'
import appReducer from '../components/AppReducer'
import { reducer as formReducer } from 'redux-form'
import signinInReducer from '../routes/SignIn/modules/SignInReducer'
import profileReducer from '../routes/Profile/modules/profile'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    loading: loadingReducer,
    app: appReducer,
    form: formReducer,
    signin: signinInReducer,
    profile: profileReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
