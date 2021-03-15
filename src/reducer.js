//TODO: [√] Add 'dummy' todo data to initial state
//TODO: [√] Define root reducer
//TODO: [] Define 'todos/todoAdded' reducer

const initialState = {
    todos: [
        { id: 0, text: 'Learn React', completed: true},
        { id: 1, text: 'Learn Redux', completed: false, color: 'purple'},
        { id: 2, text: 'Build something fun!', completed: false, color: 'blue'}
    ],
    filters:{
        status: 'All',
        color: []
    }
}

function nextTodoId(todos){
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) //* Why set the intial value to `-1`?
    return maxId + 1
}

export default function appReducer(state = initialState, action){ //ES6 default argument syntax for setting initial state
    switch(action.type){
        case 'todos/todoAdded':{
            return{
                //* Copy all existing state data
                ...state,
                //* except the `todos` field 
                todos: [
                    //* spread in all old `todo` objects
                    ...state.todos,
                    //* add the new object
                    {
                        id: nextTodoId(state.todos),
                        text: action.payload, //* Returned from caller
                        completed: false
                    }
                ]
            }
        }
        default:
            return state
    }
}