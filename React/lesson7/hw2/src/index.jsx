// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList.jsx'
import './index.scss'

const rootElem = document.querySelector('#root')

const users = [
    {
        id: 'id-0',
        age: 21,
        name: 'Bob',
    },
    {
        id: 'id-1',
        age: 17,
        name: 'Tom',
    },
    {
        id: 'id-2',
        age: 18,
        name: 'Tad',
    },
    {
        id: 'id-3',
        age: 45,
        name: 'Sam',
    },
    {
        id: 'id-4',
        age: 45,
        name: '4',
    },
    {
        id: 'id-5',
        age: 45,
        name: '5',
    },
    {
        id: 'id-6',
        age: 45,
        name: '6',
    },
    {
        id: 'id-7',
        age: 45,
        name: '7',
    },
    {
        id: 'id-8',
        age: 45,
        name: '8',
    },
    {
        id: 'id-9',
        age: 45,
        name: '9',
    },
    {
        id: 'id-10',
        age: 45,
        name: '10',
    },
    {
        id: 'id-11',
        age: 45,
        name: '11',
    },
];

ReactDOM.render(
    <UsersList users={users} />, rootElem)