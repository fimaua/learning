import { createStore } from 'redux'
import { usersReducer } from './users.reducer.js'

export const initialState = {
    usersList: [],
}

const store = createStore(usersReducer)
export default store;