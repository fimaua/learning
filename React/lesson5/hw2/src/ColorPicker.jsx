import React, { Component } from "react";

class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.coralClick = this.coralClick.bind(this);
        this.aquaClick = this.aquaClick.bind(this);
        this.bisqueClick = this.bisqueClick.bind(this);
        this.reset = this.reset.bind(this);
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
    reset() {
        this.setState(() => ({
            text: ''
        }))
    }

    render() {
        return (
            <div>
                <div className="picker__title">
                    {this.state.text}
                </div>
                <div>
                    <button className="picker__button picker__button_coral" onMouseOver={this.coralClick} onMouseLeave={this.reset}></button>
                    <button className="picker__button picker__button_aqua" onMouseOver={this.aquaClick} onMouseLeave={this.reset}></button>
                    <button className="picker__button picker__button_bisque" onMouseOver={this.bisqueClick} onMouseLeave={this.reset}></button>
                </div>
            </div>
        );
    }
}

export default ColorPicker;