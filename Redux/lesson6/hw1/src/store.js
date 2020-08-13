import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import weatherReducer from './weather/weather.reducer.js'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    weatherReducer,
    composeEnchancers(
        applyMiddleware(thunk),
    )
)
export default store;