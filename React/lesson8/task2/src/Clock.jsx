import React, { Component } from "react";

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset();
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset))
}

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: props.location,
            offset: props.offset,
            time: getTimeWithOffset(props.offset)
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                time: getTimeWithOffset(this.state.offset)
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
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
        )
    }
}

export default Clock;