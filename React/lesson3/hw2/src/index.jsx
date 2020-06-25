// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile.jsx'
import './index.scss'

const rootElem = document.querySelector('#root')

const userData = {
    firstName: 'Vitaliy',
    lastName: 'Efimenko',
    birthDate: new Date('1993-05-19T11:32:19.566Z'),
    birthPlace: 'Ukraine'
}

ReactDOM.render(
    <Profile userData={userData} />, rootElem)