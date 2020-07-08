import React, { Component } from "react";

class Dimensions extends Component {
    state = {
        width: window.innerWidth,
        height: window.innerHeight,
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
        const { innerWidth, innerHeight } = window;
        this.setDimensions(innerHeight, innerWidth);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    onResize = e => {
        const { innerWidth, innerHeight } = e.target;
        this.setDimensions(innerHeight, innerWidth)
    }

    setDimensions = (width, height) => {
        this.setState({
            width,
            height,
        });
        document.title = `${innerWidth} x ${innerHeight}`
    }

    render() {
        return <div className="dimensions">
            {`${this.state.width} x ${this.state.height}`}
        </div>
    }
}

export default Dimensions;