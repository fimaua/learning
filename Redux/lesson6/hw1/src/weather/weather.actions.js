export const WEATHER_DATA_RECIVED = 'WEATHER_DATA_RECIVED'

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const fetchWeatherData = () =>
    fetch(baseUrl).then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error()
    })

export const weatherDataRecived = weatherData => {
    return {
        type: WEATHER_DATA_RECIVED,
        payload: {
            weatherData,
        }
    }
}
export const getWeatherData = () => {
    return function (dispatch) {
        fetchWeatherData().then(weather => {
            dispatch(weatherDataRecived(weather))
        })
    }
}