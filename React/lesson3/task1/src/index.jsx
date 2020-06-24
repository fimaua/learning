// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx'
import './styles.css'

const rootElem = document.querySelector('#root')

ReactDOM.render(<Search name="Fima" />, rootElem)