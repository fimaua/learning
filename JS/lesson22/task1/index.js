const eventsList = document.querySelector('.events-list')

const events = (text, color) => {
    eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`
}
const greenDiv = events.bind(null, 'div', 'green')
const greyDiv = events.bind(null, 'div', 'grey')

const greenP = events.bind(null, 'p', 'green')
const greyP = events.bind(null, 'p', 'grey')

const greenSpan = events.bind(null, 'span', 'green')
const greySpan = events.bind(null, 'span', 'grey')

const divElem = document.querySelector('.rect_div')
const pElem = document.querySelector('.rect_p')
const spanElem = document.querySelector('.rect_span')

divElem.addEventListener('click', greyDiv, true)
divElem.addEventListener('click', greenDiv)

pElem.addEventListener('click', greyP, true)
pElem.addEventListener('click', greenP)

spanElem.addEventListener('click', greySpan, true)
spanElem.addEventListener('click', greenSpan)

const clearButton = document.querySelector('.clear-btn')
const clearingArea = () => {
    while (eventsList.firstChild) {
        eventsList.removeChild(eventsList.firstChild)
    }
}

clearButton.addEventListener('click', clearingArea)

const removeHandlers = document.querySelector('.remove-handlers-btn')
const clearHandlers = () => {
    divElem.removeEventListener('click', greenDiv)
    divElem.removeEventListener('click', greyDiv, true)
    pElem.removeEventListener('click', greenP)
    pElem.removeEventListener('click', greyP, true)
    spanElem.removeEventListener('click', greySpan, true)
    spanElem.removeEventListener('click', greenSpan)
}
removeHandlers.addEventListener('click', clearHandlers)

const attachHandlers = document.querySelector('.attach-handlers-btn')
const addHandlers = () => {
    divElem.addEventListener('click', greenDiv)
    divElem.addEventListener('click', greyDiv, true)
    pElem.addEventListener('click', greenP)
    pElem.addEventListener('click', greyP, true)
    spanElem.addEventListener('click', greySpan, true)
    spanElem.addEventListener('click', greenSpan)
}
attachHandlers.addEventListener('click', addHandlers)