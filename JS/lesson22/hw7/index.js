const inputEvent = document.querySelector('.text-input')

inputEvent.addEventListener('change', (event) => {
    console.log(event.target.value)
})