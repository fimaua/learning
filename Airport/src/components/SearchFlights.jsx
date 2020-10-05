import React from 'react'
import { connect } from 'react-redux'
import FlightsListArrival from './FlightsListArrival.jsx'
import FlightsListDeparted from './FlightsListDeparted.jsx'
import * as flightsActions from './FlightsList.actions.js'
import { flightKindSelector } from './FlightsList.selectors.js'
import { Link, Route } from 'react-router-dom'

const SearchFlights = ({ fetchFlightData, flightKind, flightKindChanged, inputTextValue }) => {
    return (
        <div className="flights">
            <div className="flights-title">
                Search Flights
            </div>
            <div className="flights-searchField">
                <input
                    type="text"
                    className="flights-searchField__input"
                    placeholder="Flight #"
                    onChange={() => inputTextValue(event.target.value)}
                />
                <button
                    className="flights-searchField__searchButton"
                    onClick={fetchFlightData}
                >Search</button>
            </div>
            <div className="flights-navigation">
                <Link
                    to="/departures"
                    className={flightKind === 'arrival' ? "flights-navigation__departures" : "flights-navigation__departures active"}
                    onClick={() => flightKindChanged('departure')}
                >
                    Departures
                </Link>
                <Link
                    to="/arrivals"
                    className={flightKind === 'arrival' ? "flights-navigation__arrivals active" : "flights-navigation__arrivals"}
                    onClick={() => flightKindChanged('arrival')}
                >
                    Arrivals
                </Link>
            </div>
            <div className="flights-schedule">
                <div className="flights-schedule__info">
                    <div className="flights-schedule__info__terminal">Terminal</div>
                    <div className="flights-schedule__info__local-time">Local time</div>
                    <div className="flights-schedule__info__destination">Destination</div>
                    <div className="flights-schedule__info__status">Status</div>
                    <div className="flights-schedule__info__airline">Airline</div>
                    <div className="flights-schedule__info__flight">Flight</div>
                </div>
                <div className="flights-schedule__list">
                    {
                        flightKind === 'arrival' ? <Route path="/arrivals"><FlightsListArrival /></Route> : <Route path="/departures"><FlightsListDeparted /></Route>
                    }
                </div>
            </div>
        </div>
    )
}

const mapDispatch = {
    fetchFlightData: flightsActions.fetchFlightData,
    flightKindChanged: flightsActions.flightKindChanged,
    inputTextValue: flightsActions.inputTextValue,
}
const mapStateToProps = state => {
    return {
        flightKind: flightKindSelector(state),
    }
}

export default connect(mapStateToProps, mapDispatch)(SearchFlights);