import React, { Component } from "react";

class Life extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props: 1
        }
        console.log('constructor: good place to create state')
    }
    componentDidMount() {
        console.log('componentDidMount: API calls, subscriptions')
        this.setState({
            props: 2
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate: decide to render or not to render')
        return true
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: some updates based on new props')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount: cleanup before DOM related to component will be removed')
    }
    render() {
        return <div>{console.log('return React element to build DOM')}</div>
    }
}

export default Life;