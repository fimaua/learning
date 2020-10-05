import { FLIGHT_DATA_RECIVED, FLIGHT_KIND_CHANGED, INPUT_TEXT_VALUE } from './FlightsList.actions.js'

const initialData = {
    flightData: {
        arrival: null,
        departed: null
    },
    flightKind: 'arrival',
    inputText: ''
}
const FlightsListReducer = (state = initialData, action) => {
    switch (action.type) {
        case FLIGHT_DATA_RECIVED: {
            return {
                ...state,
                flightData: {
                    arrival: action.payload.flightData.arrival,
                    departed: action.payload.flightData.departure,
                }
            }
        }
        case FLIGHT_KIND_CHANGED: {

            const newFlightKind = state.flightKind === action.payload.flightKind
                ? state.flightKind
                : state.flightKind = action.payload.flightKind;

            return {
                ...state,
                flightKind: newFlightKind,
            }
        }
        case INPUT_TEXT_VALUE: {
            return {
                ...state,
                inputText: action.payload.event,
            }
        }
        default:
            return state;
    }
}

export default FlightsListReducer;