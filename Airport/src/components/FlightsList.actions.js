import { getFlightsList } from './FlightsList.gateway.js'

export const FLIGHT_DATA_RECIVED = 'COMPONENTS/FLIGHT_DATA_RECIVED'
export const FLIGHT_KIND_CHANGED = 'COMPONENTS/FLIGHT_KIND_CHANGED'
export const INPUT_TEXT_VALUE = 'COMPONENTS/INPUT_TEXT_VALUE'

export const flightDataRecived = flightData => {
    return {
        type: FLIGHT_DATA_RECIVED,
        payload: {
            flightData,
        }
    }
}

export const flightKindChanged = flightKind => {
    return {
        type: FLIGHT_KIND_CHANGED,
        payload: {
            flightKind,
        }
    }
}
export const inputTextValue = event => {
    return {
        type: INPUT_TEXT_VALUE,
        payload: {
            event,
        }
    }
}

export const fetchFlightData = () => {
    return function (dispatch) {
        getFlightsList()
            .then(flightData => {
                dispatch(flightDataRecived(flightData.body))
            })
    }
}