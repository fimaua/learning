export const lang = 'LANGUAGE'

export const setLanguage = (language) => {
    return {
        type: lang,
        payload: {
            language,
        }
    }
}