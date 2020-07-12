import React, { Component } from "react";
import Expand from "./Expand.jsx"

class App extends Component {
    state = {
        isOpen: false,
    }

    handleDialog = () => {
        this.state.isOpen
            ? this.setState({
                isOpen: false
            })
            : this.setState({
                isOpen: true
            })
    }

    render() {
        return (
            <div className="app">
                <Expand isOpen={this.state.isOpen} onSwitch={this.handleDialog} title="Some title" />
            </div>
        )
    }
}

export default App;