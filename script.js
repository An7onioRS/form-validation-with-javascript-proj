const getFormElements = () => {
    let username = document.querySelector('#username'),
        email = document.querySelector('#email'),    
        password = document.querySelector('#password'),
        errorMsg = document.querySelectorAll('.error'),
        successIcons = document.querySelectorAll('.success-icon'),
        failureIcons = document.querySelectorAll('.failure-icon')

    return {
        username, 
        email, 
        password, 
        errorMsg, 
        successIcons, 
        failureIcons 
    }
}

const validateInputs = (formElement, position) => {
    if (formElement.value.trim() === '') {
        errorMsg[position].innerHTML = `${formElement.id.charAt(0).toUpperCase() + 
                                          formElement.id.slice(1)} field cannot be empty`
        failureIcons[position].style.opacity = '1'
        successIcons[position].style.opacity = '0'
    } else {
        errorMsg[position].innerHTML = ''
        successIcons[position].style.opacity = '1'
        failureIcons[position].style.opacity = '0'
    }
}

const form = document.querySelector('#form')
const { username, email, password, errorMsg, successIcons, failureIcons } = getFormElements()

form.addEventListener('submit', (e) => {
    e.preventDefault()

    validateInputs(username, 0)
    validateInputs(email, 1)
    validateInputs(password, 2)
    
}) 
