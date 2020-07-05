// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import NumberList from './NumberList.jsx'
import './index.scss'

const rootElem = document.querySelector('#root')

const numbers = [1, 2, 3, 4, 5]

ReactDOM.render(
    <NumberList numbers={numbers} />, rootElem)