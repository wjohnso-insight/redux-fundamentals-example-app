import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
// import { print1, print2, print3 } from './exampleAddons/middleware'

const composedEnhancer = composeWithDevTools(
    applyMiddleware()
)

//* `print1...3` are middleware that log their respective number to the console between each `dispatch()` call 

const store = createStore(rootReducer, composedEnhancer)
/*
    * `createStore(reducer, preloadedState, enhancer)` can also be described with
    * `createStore(reducer, enhancer)` since all stores don't have preloaded state
 */

export default store