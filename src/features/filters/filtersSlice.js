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
        case 'filters/colorFilterChanged':{
            console.log('Updating filter color...');
            let { color, changeType } = action.payload
            const { colors } = state

            switch(changeType){
                case 'added': {
                    if (colors.includes(color)){
                        return state
                    }

                    return {
                        ...state,
                        colors: state.colors.concat(color)
                    }
                }
                case 'removed': {
                    return {
                        ...state,
                        colors: state.colors.filter(
                            (existingColor) => existingColor !== color
                        )
                    }
                }
                default:
                    return state
            }
        }

        default: 
            return state
    }
}