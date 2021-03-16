//TODO: [√] Add 'dummy' todo data to initial state
//TODO: [√] Define root reducer
//TODO: [√] Refactor to `rootReducer`
//TODO: [√] Refactor to `combineReducers` implementation to reduce redundancy or `rootReducer` returning slices

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    //* Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    //* Same for filters
    filters: filtersReducer,
})

export default rootReducer
