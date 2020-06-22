"use strict"
const btnElem = document.querySelector('.single-use-btn')

// btnElem.addEventListener('click', () => {
//     console.log('clicked')
// }, { once: true })

let clicked = false;

const clickOnce = () => {
    if (!clicked) {
        console.log('clicked')
        clicked = true
    }
}
btnElem.addEventListener('click', clickOnce)