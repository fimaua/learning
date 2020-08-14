import React from 'react'
import { connect } from 'react-redux'
import { weatherDataSelector } from './weather.selectors.js'
import * as weatherActions from './weather.actions.js';

const Weather = ({ weatherData, getWeatherData }) => {
    getWeatherData();
    if (!weatherData) {
        return null;
    }
    return (
        <main className="weather">
            <h1 className="weather__title">Weather data</h1>
            <ul className="cities-list">
                {weatherData.map(city => (
                    <li key={city.id} className="city">
                        <span className="city__name">{city.name}</span>
                        <span className="city__temperature">{city.temperature}</span>
                    </li>
                ))}
            </ul>
        </main>
    )
}

const mapDispatch = {
    getWeatherData: weatherActions.getWeatherData
}
const mapStateToProps = state => {
    return {
        weatherData: weatherDataSelector(state)
    }
}

export default connect(mapStateToProps, mapDispatch)(Weather);