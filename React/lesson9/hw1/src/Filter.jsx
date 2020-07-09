import React, { Component } from "react";

const Filter = (props) => {

    const onChange = () => {

    }

    return (
        <div className="filter">
            <span className="filter__count">{this.props.}</span>
            <input type="text" onChange={onChange} className="filter__input" value="a" />
        </div>
    )
}

export default Filter;