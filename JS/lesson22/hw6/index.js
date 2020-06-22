"use strict"
const btnElem = document.querySelectorAll('.btn')


const handleClick = (event) => {
    console.log(event.target.textContent)
}
for (let elem of btnElem) {
    elem.addEventListener('click', handleClick)
}