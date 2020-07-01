import React, { Component } from "react";
import Online from "./Online.jsx";
import Offline from "./Offline.jsx"

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = { isOnline: false };
    }

    handleClick = () => {
        this.setState(() => ({
            isOnline: true
        }));
    }

    render() {
        return (
            <div className="status">
                {
                    this.state.isOnline
                        ? (<Online />)
                        : (<Offline handleClick={this.handleClick} />)
                }
            </div>
        );
    }
}

export default Status;