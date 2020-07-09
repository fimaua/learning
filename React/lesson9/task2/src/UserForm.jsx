import React, { Component } from "react";

class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            student: '',
            occupation: '',
            about: '',
        }
    }

    handleChange = event => {
        const { name, value, checked, type } = event.target

        const val = type === 'checkbox'
            ? checked
            : value

        this.setState({
            [name]: val
        })
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.createUser(this.state)
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.onSubmit}>
                <h1 className="form-title">Profile</h1>
                <div className="form-control">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input className="form-input" onChange={this.handleChange} type="text" id="name" name="name" value={this.state.name} />
                </div>
                <div className="form-control">
                    <label className="form-label" htmlFor="student">Student</label>
                    <input className="form-input" onChange={this.handleChange} value={this.state.student} type="checkbox" id="student" name="student" />
                </div>
                <div className="form-control">
                    <label className="form-label" id="occupation" htmlFor="occupation">Occupation</label>
                    <select name="occupation" onChange={this.handleChange} value={this.state.occupation} className="form-input">
                        <option value="london">London</option>
                        <option value="new-york">New York</option>
                        <option value="sidney">Sidney</option>
                        <option value="berlin">Berlin</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="form-label" id="about" htmlFor="about">About</label>
                    <textarea name="about" onChange={this.handleChange} value={this.state.about} className="form-input"></textarea>
                </div>
                <button className="submit-button" type="submit">Submit</button>
            </form>
        )
    }
}

export default UserForm;