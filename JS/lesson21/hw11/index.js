export const squaredNumbers = () => {
    document.querySelectorAll('.number')
        .forEach(elem => {
            elem.dataset.squaredNumber = Math.pow(elem.dataset.number, 2)
        })
}