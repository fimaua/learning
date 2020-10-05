export const flightsListArrivalSelector = state => {
    return state.flightData.arrival
}
export const flightsListDepartedSelector = state => {
    return state.flightData.departed
}
export const flightKindSelector = state => {
    return state.flightKind
}
export const inputTextValueSelector = state => {
    return state.inputText
}