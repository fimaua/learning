import React, { Component } from "react";
import Greeting from './Greeting.jsx'
import Login from './Login.jsx'
import Logout from './Logout.jsx'

class Auth extends Component {
    state = {
        isLoggedIn: false
    }


    login = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    logout = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        return (
            <div className='panel'>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {!this.state.isLoggedIn
                    ? <Login onLogin={this.login} />
                    : <Logout onLogout={this.logout} />}
            </div>
        );
    }
}

export default Auth;