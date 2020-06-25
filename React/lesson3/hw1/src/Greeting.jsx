import React from "react";
import moment from "moment";

const formatDate = date => moment(date).format("YYYY");

function Greeting(props) {
    const nowDate = new Date();
    const dateOfBirth = props.birthDate;
    const fullAge = (nowDate - dateOfBirth) / (24 * 3600 * 365 * 1000)
    const age = Math.round(fullAge)

    return (
        <div className="greeting">
            {`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}
        </div>
    );
}

export default Greeting;