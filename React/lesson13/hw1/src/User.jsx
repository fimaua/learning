import React, { Component } from 'react';
import { useParams } from 'react-router-dom'

class User extends Component {
    state = {
        userData: null,
    }
    componentDidMount() {
        this.fetchUserData()
    }
    fetchUserData() {
        const { match } = this.props
        fetch(`https://api.github.com/users/${match.params.userName}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data,
                })
            })
    }
    render() {
        const { userData } = this.state;
        return (
            <div className="user">
                <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
                <div className="user__info">
                    <span className="user__name">{userData.name}</span>
                    <span className="user__location">{userData.location}</span>
                </div>
            </div>
        )
    }
}

export default User;