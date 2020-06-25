// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting.jsx'
import './index.scss'

const rootElem = document.querySelector('#root')

const userInfo = {
    firstName: 'Tom',
    lastName: 'Holland',
    birthDate: new Date('1993-01-01T11:32:19.566Z')
}

ReactDOM.render(
    <Greeting
        firstName={userInfo.firstName}
        lastName={userInfo.lastName}
        birthDate={userInfo.birthDate}
    />, rootElem)