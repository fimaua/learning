const baseUrl = 'https://5ee0f37830deff0016c3f930.mockapi.io/api/v1/users';

const userForm = document.querySelector('.login-form')
const emailInput = document.querySelector('#email')
const nameInput = document.querySelector('#name')
const passwordInput = document.querySelector('#password')
const errorText = document.querySelector('.error-text')
const submitBtn = document.querySelector('.submit-button')

const isRequired = value => value ?
    undefined :
    'Required';

const isEmail = value => value.includes('@') ?
    undefined :
    'Should be an email';

const isName = value => value ?
    undefined :
    'Required';

const validateByField = {
    email: [isRequired, isEmail],
    userName: [isName],
    password: [isRequired],
}
const validate = (fieldName, value) => {
    const validators = validateByField[fieldName]
    return validators
        .map(validator => validator(value))
        .filter(errorText => errorText)
        .join(', ');
}
const onEmailChange = () => {
    if (emailInput.reportValidity()) {
        submitBtn.disabled = false
        errorText.textContent = ''
    } else {
        submitBtn.disabled = true
    }
}

const onPasswordChange = () => {
    if (passwordInput.reportValidity()) {
        submitBtn.disabled = false
        errorText.textContent = ''
    } else {
        submitBtn.disabled = true
    }
}
const onNameChange = () => {
    if (nameInput.reportValidity()) {
        submitBtn.disabled = false
        errorText.textContent = ''
    } else {
        submitBtn.disabled = true
    }
}

emailInput.addEventListener('input', onEmailChange);
passwordInput.addEventListener('input', onPasswordChange);
nameInput.addEventListener('input', onNameChange)

const onFormSubmit = event => {
    event.preventDefault();

    const formFields = [...new FormData(userForm)]
        .reduce((acc, formField) => {
            const [prop, value] = formField;
            return {
                ...acc,
                [prop]: value,
            }
        }, {})
    postUserData(formFields)
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data));
            clearForm();
        })
        .catch(onError);
};

userForm.addEventListener('submit', onFormSubmit);

const onError = () => {
    errorText.textContent = 'Failed to create user';
};
const clearForm = () => {
    emailInput.value = '';
    nameInput.value = '';
    passwordInput.value = '';
}

const postUserData = (formData) => fetch(baseUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(formData)
})