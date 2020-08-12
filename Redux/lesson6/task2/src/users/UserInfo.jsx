import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { isFetchingSelector, userDataSelector } from './users.selectors.js'
import Spinner from './Spinner.jsx'

const UsersInfo = ({ userData, isFetching }) => {
    if (isFetching) {
        return <Spinner />
    }
    if (!userData) {
        return null;
    }
    return (
        <div className="user">
            <img
                alt="User Avatar"
                src={userData.avatar_url} className="user__avatar" />
            <div className="user__info">
                <span className="user__name">{userData.name}</span>
                <span className="user__location">{userData.location}</span>
            </div>
        </div>
    )
}
UsersInfo.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    userData: PropTypes.shape()
}

UsersInfo.defaultValue = {
    userData: null,
}

const mapStateToProps = state => {
    return {
        isFetching: isFetchingSelector(state),
        userData: userDataSelector(state)
    }
}

export default connect(mapStateToProps)(UsersInfo);