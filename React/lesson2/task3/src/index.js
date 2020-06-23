// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'

const rootElem = document.querySelector('#root')

const renderSecs = time => {
    const seconds = new Date(time).getSeconds();

    const bgColor = seconds % 2 === 0
        ? '#fff'
        : '#000';

    const txtColor = seconds % 2 !== 0
        ? '#fff'
        : '#000';

    const styles = {
        color: txtColor,
        backgroundColor: bgColor
    }

    const elem = (
        <div
            className="seconds"
            style={styles}
        >
            {seconds}
        </div>
    );

    ReactDOM.render(elem, rootElem)
}

setInterval(() => renderSecs(new Date()), 1000)