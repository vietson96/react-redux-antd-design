import { injectReducer } from '../../../../store/reducers'

export default (store) => {
  return {
    path : 'detail/:id',
    // getComponent (nextState, cb) {
    // /*  Webpack - use 'require.ensure' to create a split point
    //  and embed an async module loader (jsonp) when bundling   */
    //   require.ensure([], (require) => {
    //   /*  Webpack - use require callback to define
    //    dependencies for bundling   */
    //     const SystemDetail = require('../../containers/SystemManageDetailContainer').default
    //     const reducer = require('../../modules/system-manage').default
    //
    //   /*  Add the reducer to the store on key 'product'  */
    //   // Inject system reducer define state when page called
    //     injectReducer(store, { key: 'systems', reducer })
    //
    //   /*  Return getComponent   */
    //     cb(null, SystemDetail)
    //
    //   /* Webpack named bundle   */
    //   }, 'systems')
    // },
  }
}
