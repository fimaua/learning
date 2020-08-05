import React from "react";
import User from "./User.jsx"
import Filter from "../Filter.jsx"
import { onChange } from './users.actions.js';
import { usersListSelector, filterTextSelector } from './users.selectors.js'
import { connect } from 'react-redux';

const UsersList = ({ filterText, users, onChange }) => {
    const filtredUsers = users.filter(user =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
    )
    return (
        <div>
            <Filter filterText={filterText} onChange={onChange} count={filtredUsers.length} />
            <ul className='users'>
                {filtredUsers.map(user => (
                    <User key={user.id} {...user} />
                ))}
            </ul>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        users: usersListSelector(state),
        filterText: filterTextSelector(state),
    }
}

const mapDispatch = {
    onChange: onChange,
}

export default connect(mapStateToProps, mapDispatch)(UsersList);