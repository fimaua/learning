"use strict"
const btnsElem = document.querySelectorAll('.pagination__page')

const handleClick = (event) => {
    console.log(event.target.dataset.pageNumber)
}

for (let elem of btnsElem) {
    elem.addEventListener('click', handleClick)
}