export const sayHiOnDispatch = (createStore) => { //* Wraps store.dispatch
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)

    function newDispatch(action) {//* Takes in the action from the original dispatch call 
      const result = store.dispatch(action) //* Dispatches the original action
      console.log('Hi!') //* Custom logic goes here
      return result //* Returns the result of the original dispatch(action) call
    }

    return { ...store, dispatch: newDispatch }
  }
}

export const includeMeaningOfLife = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)

    function newGetState() {
      return {
        ...store.getState(),
        meaningOfLife: 42,
      }
    }

    return { ...store, getState: newGetState }
  }
}
