import { createStore, applyMiddleware, compose } from 'redux'
import { counterReducer } from './counter.reducer.js'

const middleware = store => next => action => {
    console.group('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
}
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    counterReducer,
    composeEnchancers(
        applyMiddleware(middleware),
    )
)
export default store;