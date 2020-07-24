import { initialState } from './store.js'
import { deleteUser } from './users.actions.js'

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS/ADDUSER':
            return {
                usersList: state.usersList.concat(action.user)
            }
        case 'USERS/DELETEUSER':
            return {
                usersList: state.usersList.filter(user =>
                    user.id !== action.id)
            }
        default:
            return state;
    }
}