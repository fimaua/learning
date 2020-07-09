import React, { Component } from "react";
import User from "./User.jsx"
import Filter from "./Filter.jsx"

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }
    onChange = event => {
        const { value } = event.target
        this.setState({ value: value })
    }

    render() {
        const filtredUsers = this.props.users.filter(user =>
            user.name.toLowerCase().includes(this.state.value.toLowerCase())
        )
        return (
            <div>
                <Filter filterText={this.state.value} onChange={this.onChange} count={filtredUsers.length} />
                <ul className='users'>
                    {filtredUsers.map(user => (
                        <User key={user.id} {...user} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default UsersList;