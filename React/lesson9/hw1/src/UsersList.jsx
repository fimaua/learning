import React, { Component } from "react";
import User from "./User.jsx"
import Filter from "./Filter.jsx"

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { users } = this.props
        return (
            <div>
                <Filter filterText={} />
                <ul className='users'>
                    {users.map(user => (
                        <User key={user.id} {...user} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default UsersList;