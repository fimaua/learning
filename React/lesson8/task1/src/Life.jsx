import React, { Component } from "react";

class Life extends Component {
    constructor(props) {
        super(props)
        console.log('constructor: good place to create state')
    }
    componentDidMount() {
        console.log('componentDidMount: API calls, subscriptions')
        console.log('shouldComponentUpdate: decide to render or not to render')
        console.log('componentDidUpdate: some updates based on new props')
        console.log('componentWillUnmount: cleanup before DOM related to component will be removed')
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    componentDidUpdate(prevProps, prevState) {
    }
    componentWillUnmount() {
    }
    render() {
        return <div>{console.log('return React element to build DOM')}</div>
    }
}

export default Life;