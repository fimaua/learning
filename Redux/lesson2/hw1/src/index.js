import { addUser, deleteUser } from './users.actions.js'
import store from './store.js'

const user1 = {
    id: 1,
    name: 'Tom'
}
const user2 = {
    id: 2,
    name: 'Bob'
}
const user3 = {
    id: 3,
    name: 'Cat'
}

store.dispatch(addUser(user1))
store.dispatch(addUser(user2))
store.dispatch(addUser(user3))
store.dispatch(deleteUser(user1.id))


console.log(store.getState().usersList)
