import React, { Component } from "react";

class Dimensions extends Component {
    state = {
        width: null,
        height: null,
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
        document.title = `${innerWidth} x ${innerHeight}`
    }

    render() {
        return <div className="dimensions">
            {`${this.state.width}px - ${this.state.height}px`}
        </div>
    }
}

export default Dimensions;