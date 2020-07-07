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
        const { users } = this.props
        const { currentPage, itemsPerPage } = this.state
        const start = currentPage * itemsPerPage
        const end = start + itemsPerPage
        const usersOnPage = users.slice(start, end)

        return (
            <div>
                <Pagination
                    goPrev={this.goPrev}
                    goNext={this.goNext}
                    itemsPerPage={this.state.itemsPerPage}
                    currentPage={this.state.currentPage + 1}
                    totalItems={users.length}
                />
                <ul className='users'>
                    {usersOnPage.map(user => (
                        <User key={user.id} {...user} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default UsersList;