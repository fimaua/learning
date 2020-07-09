import React, { Component } from "react";

class Filter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { filterText, onChange, count } = this.props
        return (
            <div className="filter">
                <span className="filter__count">{count}</span>
                <input type="text" onChange={onChange} className="filter__input" value={filterText} />
            </div>
        )
    }
}

export default Filter;