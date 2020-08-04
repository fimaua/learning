import React from 'react'
import PropTypes from 'prop-types'
import User from "./User.jsx"
import Pagination from "./Pagination.jsx"
import { goPrevPage, goNextPage } from './users.actions.js';
import { connect } from 'react-redux';
import { usersListSelector, currentPageSelector } from './users.selectors.js'

const itemsPerPage = 3;

const UsersList = ({ users, currentPage, goPrev, goNext }) => {
    const start = currentPage * itemsPerPage;
    const usersTodisplay = users.slice(start, start + itemsPerPage)

    return (
        <div>
            <Pagination
                goPrev={goPrev}
                goNext={goNext}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                totalItems={users.length}
            />
            <ul className='users'>
                {usersTodisplay.map(user => (
                    <User key={user.id} {...user} />
                ))}
            </ul>
        </div>
    )
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    currentPage: PropTypes.number.isRequired,
    goNext: PropTypes.func.isRequired,
    goPrev: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        users: usersListSelector(state),
        currentPage: currentPageSelector(state),
    }
}

const mapDispatch = {
    goPrev: goPrevPage,
    goNext: goNextPage,
}

export default connect(mapStateToProps, mapDispatch)(UsersList);