import { lang } from './language.actions.js'

const initialState = {
    language: 'en'
}

export const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case lang:
            return state.language = action.payload.language;
        default:
            return state
    }
}