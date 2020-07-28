import { ADD_USER, REMOVE_USER } from './user.actions.js'

const initialState = {
    user: null,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return state.user = action.payload.userData
        case REMOVE_USER: {
            return state.user = null
        }
        default:
            return state;
    }
}