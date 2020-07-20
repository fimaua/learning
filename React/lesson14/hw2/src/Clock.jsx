import React, { useState, useEffect } from "react";

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset();
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset))
}

const Clock = (props) => {
    const { offset, location } = props;
    const [time, setTime] = useState(getTimeWithOffset(offset))

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimeWithOffset(offset))
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="clock">
            <div className="clock__location">
                {location}
            </div>
            <div className="clock__time">
                {time.toLocaleTimeString()}
            </div>
        </div>
    )
}

export default Clock;