import React, { Component } from "react";
import Numbers from "./Numbers.jsx"
import EvenNumbers from "./EvenNumbers.jsx"
import OddNumbers from "./OddNumbers.jsx"


class App extends Component {
    state = {
        number: 0,
    }

    componentDidMount() {
        this.intevalId = setInterval(() => {
            this.setState({
                number: this.state.number + 1
            })
        }, 1000);
    }

    componentWillUnMount() {
        clearInterval(this.intevalId)
    }

    render() {
        return (
            <div className="app">
                <EvenNumbers title="Even numbers" number={this.state.number} />
                <Numbers title="All numbers" number={this.state.number} />
                <OddNumbers title="Odd numbers" number={this.state.number} />
            </div>
        )
    }
}

export default App;