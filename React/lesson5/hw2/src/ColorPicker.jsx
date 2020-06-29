import React, { Component } from "react";

class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = { text: 'red' };
        this.coralClick = this.coralClick.bind(this);
        this.aquaClick = this.aquaClick.bind(this);
        this.bisqueClick = this.bisqueClick.bind(this);
    }

    coralClick() {
        this.setState(() => ({
            text: 'Coral'
        }));
    }
    aquaClick() {
        this.setState(() => ({
            text: 'Aqua'
        }));
    }
    bisqueClick() {
        this.setState(() => ({
            text: 'Bisque'
        }));
    }

    render() {
        return (
            <div>
                <div className="picker__title">
                    {this.state.text}
                </div>
                <div>
                    <button className="picker__button picker__button_coral" onMouseOver={this.coralClick}></button>
                    <button className="picker__button picker__button_aqua" onMouseOver={this.aquaClick}></button>
                    <button className="picker__button picker__button_bisque" onMouseOver={this.bisqueClick}></button>
                </div>
            </div>
        );
    }
}

export default ColorPicker;