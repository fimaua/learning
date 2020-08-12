import { createStore, applyMiddleware, compose } from 'redux'
import usersReducer from './users/users.reducer.js'
import thunk from 'redux-thunk'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    usersReducer,
    composeEnchancers(
        applyMiddleware(thunk),
    )
)
export default store;