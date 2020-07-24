import { createStore } from 'redux'

export const increment = () => {
    return {
        type: 'COUNTER/INCREMENT'
    }
}
export const decrement = () => {
    return {
        type: 'COUNTER/DECREMENT'
    }
}
export const reset = () => {
    return {
        type: 'COUNTER/RESET'
    }
}

export const initialState = {
    history: [],
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNTER/INCREMENT':
            return {
                ...state,
                history: state.history.concat('+1')
            }
        case 'COUNTER/DECREMENT':
            return {
                ...state,
                history: state.history.concat('-1')
            }
        case 'COUNTER/RESET':
            return {
                ...state,
                history: []
            }
        default:
            return state;
    }
}
const store = createStore(counterReducer)
export default store;