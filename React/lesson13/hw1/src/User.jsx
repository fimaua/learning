import React from 'react';
import { useParams } from 'react-router-dom'

function User() {
    const { userName } = useParams()
    const getUser = fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(data => JSON.stringify(data))

    const { avatar_url, name, location } = getUser
    return (
        <div className="user">
            <img alt="User Avatar" src={avatar_url} className="user__avatar" />
            <div className="user__info">
                <span className="user__name">{name}</span>
                <span className="user__location">{location}</span>
            </div>
        </div>
    )
}

export default User;