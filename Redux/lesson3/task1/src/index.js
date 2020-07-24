import { addUser, deleteUser, updateUser } from './users.actions.js'
import { increment, decrement, reset } from './counter.actions.js'
import store from './store.js'

store.subscribe(() => console.log(store.getState()))

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(reset())


store.dispatch(addUser({ id: 1, name: 'Tom' }))
store.dispatch(addUser({ id: 2, name: 'Bob' }))

store.dispatch(deleteUser(1))
store.dispatch(updateUser(2, { name: 'Bob Marley', age: 17 }))


