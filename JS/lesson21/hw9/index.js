export const finishForm = () => {
    const form = document.querySelector('.login-form')

    const password = document.querySelector('input[name=password]')
    password.setAttribute('type', 'password')

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'login')
    form.append(input)
}