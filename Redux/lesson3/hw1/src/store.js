import { createStore, combineReducers } from 'redux'
import { langReducer } from './language.reducer.js'
import { cardsReducer } from './card.reducer.js';
import { userReducer } from './user.reducer.js';

const appReducer = combineReducers({
    language: langReducer,
    user: userReducer,
    card: cardsReducer,
})

const store = createStore(appReducer)
export default store;