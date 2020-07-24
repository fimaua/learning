import { createStore } from 'redux'

export const increment = () => {
    return {
        type: 'COUNTER/INCREMENT',
    }
}

export const decrement = () => {
    return {
        type: 'COUNTER/DECREMENT',
    }
}

export const counterReducer = (store = 0, action) => {
    switch (action.type) {
        case 'COUNTER/INCREMENT':
            return store + 1;
        case 'COUNTER/DECREMENT':
            return store - 1;
        default:
            return store
    }
}

const store = createStore(counterReducer)