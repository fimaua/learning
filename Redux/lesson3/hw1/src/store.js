import { createStore, combineReducers } from 'redux'
import { langReducer } from './language.reducer.js'
import { cartsReducer } from './cart.reducer.js';
import { userReducer } from './user.reducer.js';

const appReducer = combineReducers({
    language: langReducer,
    user: userReducer,
    cart: cartsReducer,
})

const store = createStore(appReducer)
export default store;