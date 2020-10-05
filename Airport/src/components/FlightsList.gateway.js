import moment from 'moment'

const baseUrl = 'https://api.iev.aero/api/flights';

export const getFlightsList = () =>
    fetch(`${baseUrl}/${moment().format('MM-d-YYYY')}`).then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error()
    })