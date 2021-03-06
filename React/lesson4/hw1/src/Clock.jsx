import React, { Component } from "react";
import './clock.scss'

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset();
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset))
}

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: props.location,
            offset: props.offset,
            time: getTimeWithOffset(props.offset)
        }
        setInterval(() => {
            this.setState({
                time: getTimeWithOffset(this.state.offset)
            })
        }, 1000)
    }

    render() {
        return (
            <div className="clock">
                <div className="clock__location">
                    {this.state.location}
                </div>
                <div className="clock__time">
                    {this.state.time.toLocaleTimeString()}
                </div>
            </div>
        );
    }
}

export default Counter;