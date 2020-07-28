import { ADD_USER, REMOVE_USER } from './user.actions.js'

const initialState = null

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return state = action.payload.userData
        case REMOVE_USER: {
            return state = null
        }
        default:
            return state;
    }
}