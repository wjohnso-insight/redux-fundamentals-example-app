//TODO: [√] Add 'dummy' todo data to initial state
//TODO: [√] Define root reducer
//TODO: [] Define 'todos/todoAdded' reducer

const initialState = {}

export default function appReducer(state = initialState, action){ //ES6 default argument syntax for setting initial state
    switch(action.type){
        // case 'todos/todoAdded':{
        //     return{
        //         //* Copy all existing state data
        //         ...state,
        //         //* Update the `todos` field 
        //         todos: [
        //             //* spread in all old `todo` objects
        //             ...state.todos,
        //             //* add the new object
        //             {
        //                 id: nextTodoId(state.todos),
        //                 text: action.payload, //* Returned from caller
        //                 completed: false
        //             }
        //         ]
        //     }
        // }
        // case 'todos/todoToggled':{
        //     return{
        //         ...state,
        //         todos: state.todos.map(todo => {
        //             if (todo.id !== action.payload){
        //                 return todo //* this is our target todo, as determined by the action called at component level
        //             }
        //             return{
        //                 ...todo, //*Spread in the rest of target todo 
        //                 completed: !todo.completed //* updated target todo
        //             }
        //         })
        //     }
        // }
        // case 'filters/statusFilterChanged':{
        //     return {
        //         ...state,
        //         filters:{
        //             ...state.filters,
        //             status: action.payload //* Since this is basically an enum, its easy to return directly from dispatch caller
        //         }
        //     }
        // }
        default:
            return state
    }
}