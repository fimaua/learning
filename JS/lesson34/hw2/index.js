const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users'

export const getUsersList = () => fetch(baseUrl)

export const getUserById = (id) => fetch(`${baseUrl}/${id}`)

export const createUser = (userObj) =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userObj)
    })

export const updateUser = (id, userObj) => fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userObj)
})

export const deleteUser = (id) => fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
})