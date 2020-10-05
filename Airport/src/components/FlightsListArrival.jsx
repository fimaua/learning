import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { flightsListArrivalSelector, inputTextValueSelector } from './FlightsList.selectors.js'

const FlightsListArrival = ({ flightsList, inputText }) => {
    if (!flightsList) {
        return (
            <div className="flights__list-noFlights">Press "SEARCH" button to find some flight</div>
        )
    }
    const flightsListFiltered = flightsList.filter(flight => flight.codeShareData[0].codeShare.includes(inputText.toUpperCase()))
    return (
        <div className="flights__list-arrivals">
            {flightsListFiltered.length !== 0
                ? flightsListFiltered.map(flight => (
                    <div key={flight.ID} className="flight">
                        <div className="flight__terminal"><span className={flight.term === 'A' ? "term__a" : "term__d"}>{flight.term}</span></div>
                        <div className="flight__localTime">{moment(flight.timeLandFact).format('h:mm')}</div>
                        <div className="flight__destination">{flight['airportFromID.city_en']}</div>
                        <div className="flight__status">Landed {moment(flight.timeLandCalc).format('h:mm')}</div>
                        <div className="flight__airline"><img src={flight.airline.en.logoSmallName} alt="Company logo" />{flight.airline.en.name}</div>
                        <div className="flight__number">{flight.codeShareData[0].codeShare}</div>
                    </div>
                ))
                : <div className="flights__list-noFlights">No Flights</div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        flightsList: flightsListArrivalSelector(state),
        inputText: inputTextValueSelector(state)
    }
}

export default connect(mapStateToProps)(FlightsListArrival);