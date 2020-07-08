import React, { Component } from "react";

class Dimensions extends Component {
    state = {
        width: window.innerWidth,
        height: window.innerHeight,
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    onResize = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        document.title = `${this.state.width} x ${this.state.height}`
    }

    render() {
        return <div className="dimensions">
            {`${this.state.width}px - ${this.state.height}px`}
        </div>
    }
}

export default Dimensions;