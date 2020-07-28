import { createStore, combineReducers } from 'redux'
import { languageReducer } from './language.reducer.js'
import { cartsReducer } from './cart.reducer.js';
import { userReducer } from './user.reducer.js';

const appReducer = combineReducers({
    language: languageReducer,
    user: userReducer,
    cart: cartsReducer,
})

const store = createStore(appReducer)
export default store;