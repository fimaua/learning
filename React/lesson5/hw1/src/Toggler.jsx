import React from "react";

class Toggler extends React.Component {
    handleClick(e) {
        if (e.target.textContent !== 'On') {
            e.target.textContent = 'On'
        } else {
            e.target.textContent = 'Off'
        }
    }
    render() {
        return (
            <button
                className="toggler"
                onClick={this.handleClick}
            >
                Off
            </button>
        )
    }
}

export default Toggler;