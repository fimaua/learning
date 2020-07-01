// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page.jsx'
import './index.scss'

const rootElem = document.querySelector('#root')

ReactDOM.render(
    <Page />, rootElem)