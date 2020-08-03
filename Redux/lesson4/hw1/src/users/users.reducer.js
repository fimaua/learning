import { GO_NEXT, GO_PREV } from './users.actions.js'

const initialState = {
    usersList: [
        {
            id: 'id-0',
            age: 21,
            name: 'Bob',
        },
        {
            id: 'id-1',
            age: 17,
            name: 'Tom',
        },
        {
            id: 'id-2',
            age: 18,
            name: 'Tad',
        },
        {
            id: 'id-3',
            age: 45,
            name: 'Sam',
        },
    ],
    currentPage: 0,
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GO_PREV:
            return {
                ...state,
                currentPage: state.currentPage - 1
            }
        case GO_NEXT: {
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        }
        default:
            return state;
    }
}