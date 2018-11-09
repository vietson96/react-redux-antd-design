import { injectReducer } from '../../store/reducers'
import DetailRoute from './components/detail'

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
    path: 'systems',
    indexRoute: {
      getComponent (nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
          /*  Webpack - use require callback to define
           dependencies for bundling   */
          const System = require('../SystemManage/containers/SystemManageContainer').default
          const reducer = require('../SystemManage/modules/system-manage').default

          /*  Add the reducer to the store on key 'product'  */
          // Inject system reducer. define state when page called
          injectReducer(store, { key: 'systems', reducer })

          /*  Return getComponent   */
          cb(null, System)

          /* Webpack named bundle   */
        }, 'systems')
      },
    },
    childRoutes: [
      DetailRoute(store),
    ]
  }
}
