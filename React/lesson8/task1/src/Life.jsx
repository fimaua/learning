import React, { Component } from "react";

class Life extends Component {
    constructor(props) {
        super(props)
        console.log('good place to create state')
    }
    componentDidMount() {
        console.log('API calls, subscriptions')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('decide to render or not to render')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('some updates based on new props')
    }
    componentWillUnmount() {
        console.log('cleanup before DOM related to component will be removed')
    }
    render() {
        return console.log('React element to build DOM')
    }
}

export default Life;