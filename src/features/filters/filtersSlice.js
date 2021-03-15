import { getAllByAltText } from "@testing-library/dom";

const initialState = {
    status: 'All',
    colors: []
}

export default function filtersReducer(state = initialState, action){
    switch(action.type){
        case 'filters/statusFilterChanged':{
            return{ 
                //* Note one less level of nesting vs global state
                ...state,
                status: action.payload
            }
        }
        default: 
            return state
    }
}