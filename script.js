const getFormElements = () => {
    let username = document.querySelector('#username'),
        email = document.querySelector('#email'),    
        password = document.querySelector('#password')

    return {
        username, 
        email, 
        password 
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
        return true
    }
}

const addUser = () => {

        let user = {
            username: username.value,
            email: email.value,
            password: password.value,
            createdAt: new Date().getTime()
        }

        users.push(user)

        localStorage.setItem('users', JSON.stringify(users))
}

const removeValidationStyle = () => {
    setTimeout(() => {
        for (let el of successIcons) {
            el.style.opacity = '0'
        }
    }, 1000)
}


const form = document.querySelector('#form')
const errorMsg = document.querySelectorAll('.error')
const successIcons = document.querySelectorAll('.success-icon')
const failureIcons = document.querySelectorAll('.failure-icon')
const users = JSON.parse(localStorage.getItem('users')) || []
const valid = true

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const { username, email, password} = getFormElements()

    let input1 = validateInputs(username, 0),
        input2 = validateInputs(email, 1),
        input3 = validateInputs(password, 2)

    if (input1 && input2 && input3) {
        addUser(username, email, password)

        removeValidationStyle()

        e.target.reset()
    }
}) 
