export default store => next => action => {
  const state = store.getState()
  // check token if have token save localstorage
  if (state && state.app && state.app.acceptToken) {
    localStorage.setItem('admin', JSON.stringify(state.app))
  }
  next(action)
}
