// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx'
import './index.scss'

const rootElem = document.querySelector('#root')

const userInfo = {
    name: 'Tom',
    avatarUrl: 'https://www.volynpost.com/img/modules/news/7/6c/aff84ee884aa9094f27910b5582da6c7/top-photo.jpg'
}

ReactDOM.render(
    <Comment
        author={userInfo}
        text="Good job!"
        date={new Date('2019-01-01T11:32:19.566Z')}
    />, rootElem)