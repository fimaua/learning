import React from 'react'
import User from "./User.jsx"
import Pagination from "./Pagination.jsx"
import * as usersActions from './users.actions.js';
import { connect } from 'react-redux';

const UsersList = ({ users, goPrev, goNext }) => {
    const { currentPage, usersList } = users
    const start = currentPage * 3
    const end = start + 3
    const usersOnPage = usersList.slice(start, end)

    return (
        <div>
            <Pagination
                goPrev={goPrev}
                goNext={goNext}
                itemsPerPage={3}
                currentPage={currentPage}
                totalItems={usersList.length}
            />
            <ul className='users'>
                {usersOnPage.map(user => (
                    <User key={user.id} {...user} />
                ))}
            </ul>
        </div>
    )
}

const mapState = state => {
    return {
        ...state
    }
}

const mapDispatch = {
    goPrev: usersActions.goPrev,
    goNext: usersActions.goNext,
}

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);