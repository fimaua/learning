import { addProduct, removeProduct } from './cart.actions.js'
import { setUser, removeUser } from './user.actions.js'
import { setLanguage } from './language.actions.js'
import store from './store.js'

store.subscribe(() => console.log(store.getState()))

store.dispatch(setLanguage('ru'))
store.dispatch(addProduct({ id: 1, name: 'coffe' }))
store.dispatch(addProduct({ id: 2, name: 'milk' }))
store.dispatch(removeProduct(1))
store.dispatch(setUser({ id: 2212, name: 'Fima' }))



