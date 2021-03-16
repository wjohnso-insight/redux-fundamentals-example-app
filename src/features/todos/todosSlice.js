//TODO: [] Define `selectAllTodos` selector
//TODO: [√] Define `todoDeleted` reducer
//TODO: [√] Define `todoAllCompletedSelected` reducer
//TODO: [√] Define `todoAllCompletedRemoved` reducer

const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
  ]
  
  function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }
  
  export default function todosReducer(state = initialState, action) {
    switch (action.type) {
    case 'todos/todoAdded':{
        //* Can return just the new todos array - no extra ...state object around it
        return [
            ...state,
            {
                id: nextTodoId(state),
                text: action.payload,
                completed: false
            }
        ]
    }
    case 'todos/todoToggled':{
        return state.map(todo => {
            if(todo.id !== action.payload){
                return todo
            }

            return {
                ...todo,
                completed: !todo.completed
            }
        })
    }
    case 'todos/colorSelected':{
        const { color, todoId } = action.payload
        return state.map((todo) => {
            if (todo.id !== todoId){
                return todo
            }

            return {
                ...todo,
                color,
            }
        })
    }
    case 'todos/todoDeleted':{
        return state.filter((_, i) => i !== action.payload) //* .filter() returns a new copy of the array, so this change is immutable 
    }
    case 'todos/allCompleted':{
        return state.map(todo => {
            return {...todo, completed: true}
        }) //* .map() returns a copy of the updated array, so again, immutable
    }
    case 'todos/completedCleared':{
        return state.filter(todo => !todo.completed) //* Returns an array of only incomplete todo items
    }
      default:
        return state
    }
  }