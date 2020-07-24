import { createStore } from 'redux'

const INCREMENT = 'COUNTER/INCREMENT'
const DECREMENT = 'COUNTER/DECREMENT'

const increment = () => {
    return {
        type: INCREMENT,
    }
}

const decrement = () => {
    return {
        type: DECREMENT,
    }
}

const counterReducer = (store = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return store + 1;
        case DECREMENT:
            return store - 1;
        default:
            return store;
    }
}

const store = createStore(counterReducer)