import { createStore, applyMiddleware, compose } from 'redux'
import FlightsListReducer from './components/FlightsList.reducer.js'
import thunk from 'redux-thunk'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    FlightsListReducer,
    composeEnchancers(
        applyMiddleware(thunk),
    )
)
export default store;