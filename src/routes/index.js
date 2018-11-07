// We only need to import the modules necessary for initial render
import PageLayout from '../layouts/PageLayout/PageLayout'
import CommonLayout from '../layouts/CommonLayout/CommonLayout'
import Home from './Home'
import CounterRoute from './Counter'
import ProductRoute from './Product'
import ProfileRoute from './Profile'
import SystemManageRoute from './SystemManage'
import SignInRoute from './SignIn'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => {
  const authenticate = (nextState, transition) => {
    // if router not home "/" check authenticate
    // if (nextState.location.pathname !== '/') {
    let { app } = store.getState()
    if (!app || !app.acceptToken) {
      transition('/signin')
    }
  }

  const checkAuthenticateSigninPage = (nextState, transition) => {
    let { app } = store.getState()
    if (app && app.acceptToken) {
      transition('/')
    }
  }

  return [
    {
      path: '/',
      onEnter: authenticate,
      component: PageLayout,
      indexRoute: Home,
      childRoutes: [
        CounterRoute(store),
        ProductRoute(store),
        ProfileRoute(store),
        SystemManageRoute(store),
      ]
    },
    {
      path: '/signin',
      component: CommonLayout,
      onEnter: checkAuthenticateSigninPage,
      indexRoute: SignInRoute(store)
    }
  ]
}

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
