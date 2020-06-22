export const finishList = () => {
    const list = document.querySelector('.list')
    const five = document.querySelector('.special')

    const one = document.createElement('li')
    one.textContent = '1';
    list.prepend(one)

    const four = document.createElement('li')
    four.textContent = '4';
    five.before(four)

    const six = document.createElement('li')
    six.textContent = '6';
    five.after(six)

    const eight = document.createElement('li')
    eight.textContent = '8';
    list.append(eight)
}