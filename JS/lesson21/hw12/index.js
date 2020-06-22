export const getSection = num => {
    const number = document.querySelector(`span[data-number='${num}']`)
    return number.closest('.box').dataset.section
}