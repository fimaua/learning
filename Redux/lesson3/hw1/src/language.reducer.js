import { lang } from './language.actions.js'

const initialState = 'en'

export const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case lang:
            return state = action.payload.language;
        default:
            return state
    }
}