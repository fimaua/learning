import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';
import React, { Component } from "react";

class Auth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            isProcessing: false
        }
    }

    login = () => {
        this.setState({
            isProcessing: true
        })

        setTimeout(() => {
            this.setState({
                isProcessing: false,
                isLoggedIn: true
            })
        }, 2000)
    }
    logout = () => {
        this.setState({
            isProcessing: true
        })

        setTimeout(() => {
            this.setState({
                isProcessing: false,
                isLoggedIn: false
            })
        }, 2000)
    }

    render() {

        const { isLoggedIn, isProcessing } = this.state;

        if (isProcessing) {
            return (
                <Spinner size={{
                    width: 50, height: 50
                }} />
            )
        }

        if (isLoggedIn) {
            return (
                <Logout onLogout={this.logout} />
            )
        }
        return (
            <Login onLogin={this.login} />
        )
    }
}

export default Auth;