import React, { Component } from 'react';
import { ThemeContext } from './themes-context.js'

class ThemedButton extends Component {
    render() {
        this.context;
        return (
            <div>
                <button {...this.props} className="btn" style={{
                    backgroundColor: this.context.background,
                    color: this.context.fontColor,
                }}>Dynamic Theme</button>
            </div>
        )
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;