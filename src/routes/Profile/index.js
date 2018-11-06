import { injectReducer } from '../../store/reducers'

export default (store) => {
  const authenticate = (nextState, transition) => {
    // if router not home "/" check authenticate
    if (nextState.location.pathname !== '/') {
      let { app } = store.getState()
      if (!app || !app.acceptToken) {
        transition('/signin')
      }
    }
  }

  return {
    onEnter: authenticate,
    path : 'profile',
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
       and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
         dependencies for bundling   */
        const Profile = require('./containers/ProfileContainer').default
        const reducer = require('./modules/profile').default

        /*  Add the reducer to the store on key 'product'  */
        injectReducer(store, { key: 'profile', reducer })

        /*  Return getComponent   */
        cb(null, Profile)

        /* Webpack named bundle   */
      }, 'profile')
    }
  }
}