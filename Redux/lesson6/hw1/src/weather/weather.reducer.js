import { WEATHER_DATA_RECIVED } from './weather.actions.js'

const initialData = {
    weatherData: null,
}
const weatherReducer = (state = initialData, action) => {
    switch (action.type) {
        case WEATHER_DATA_RECIVED: {
            return {
                ...state,
                weatherData: action.payload.weatherData,
            }
        }
        default:
            return state;
    }
}

export default weatherReducer;