import React from 'react'
import TodoListItem from './TodoListItem'
import { useSelector, shallowEqual } from 'react-redux'

const selectTodoIds = state => state.todos.map(todo => todo.id) 

const TodoList = () => {
  const todoIds = useSelector(selectTodoIds, shallowEqual);
  /*
    * Remember that returning a new array reference in selectors causes a re-render every time
    * use shallow equality check in `useSelector()` `equalityFn`    
   */
  const renderedListItems = todoIds.map(todoId => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
