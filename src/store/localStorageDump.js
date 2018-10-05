export default store => next => action => {
  const state = store.getState();
  if(state && state.app)
    localStorage.setItem('admin', JSON.stringify(state.app));

  next(action);
}
