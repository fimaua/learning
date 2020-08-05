export const ON_CHANGE = 'USERS/ON_CHANGE'

export const onChange = (event) => {
    return {
        type: ON_CHANGE,
        payload: { event }
    }
}