import React, { Component } from "react";
import User from "./User.jsx"
import Pagination from "./Pagination.jsx"

class UsersList extends Component {
    state = {
        currentPage: 0,
        itemsPerPage: 3
    }

    goPrev = () => {
        this.setState({
            currentPage: this.state.currentPage - 1
        })
    }

    goNext = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        })
    }

    render() {
        const usersList = this.props.users

        return (
            <div>
                <Pagination
                    {...this.state}
                    totalItems={usersList.length}
                    {...this} />
                <ul className='users'>
                    {usersList.map(user => (
                        <User key={user.id} {...user} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default UsersList;