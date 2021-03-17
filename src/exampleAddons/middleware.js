export const print1 = (storeAPI) => (next) => (action) => {
  console.log('1')
  return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
  console.log('2')
  return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
  console.log('3')
  return next(action)
}

// const loggerMiddleware = storeAPI => next => action => {
//   console.log('dispatching', action)
//   let result = next(action) //* passing action to next middleware or `store.dispatch()`
//   //! as the `next()` runs, eventually the state tree is updated. Once this happens, `next()` returns
//   console.log('next state', storeAPI.getState()) 
//   return result //* Returns the return value from the next middleware or `store.dispatch`
// }