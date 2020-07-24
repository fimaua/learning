export const addUser = (user) => {
    return {
        type: 'USERS/ADDUSER',
        user
    }
}
export const deleteUser = (id) => {
    return {
        type: 'USERS/DELETEUSER',
        id
    }
}