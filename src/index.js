import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'
import './api/server'

console.log(`Initial state:`, store.getState());

const unsubscribe = store.subscribe(() => 
  console.log('State after dispatch: ', store.getState())
)

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions'})
store.dispatch({ type: 'todos/todoToggled', payload: 0})
store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })
store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'added'}
})

unsubscribe()
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
