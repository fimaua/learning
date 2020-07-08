import React, { Component } from "react";

class ConnectionStatus extends Component {
    state = {
        status: 'online'
    }

    componentDidMount() {
        window.addEventListener('online', this.onStatusOnline);
        window.addEventListener('offline', this.onStatusOffline);
    }
    componentWillUnmount() {
        window.removeEventListener('online', this.onStatusOnline);
        window.removeEventListener('offline', this.onStatusOffline);
    }
    onStatusOnline = () => {
        this.setState({
            status: 'online'
        })
    }
    onStatusOffline = () => {
        this.setState({
            status: 'offline'
        })
    }
    toggleClass = () => {
        return this.state.status === 'online'
            ? 'status'
            : 'status status_offline'
    }
    render() {
        return <div className={this.toggleClass()}>{this.state.status}</div>
    }
}

export default ConnectionStatus;