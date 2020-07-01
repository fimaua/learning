import React from "react";

const Logout = (props) => {
    const onLogout = props.onLogout;
    return (
        <button className="logout btn" onClick={onLogout}>Logout</button>
    )
}

export default Logout;