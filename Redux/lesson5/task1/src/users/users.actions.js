export const GO_PREV = 'USERS/GO_PREV'
export const GO_NEXT = 'USERS/GO_NEXT'

export const goPrevPage = () => {
    return {
        type: GO_PREV,
    }
}
export const goNextPage = () => {
    return {
        type: GO_NEXT,
    }
}