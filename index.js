// Add your code here
const userId = document.getElementById('user-id')
const errorMessage = document.getElementById('error-message')
const submitData = (name, email) => {
    const userData = { name, email }
    const fetchConfigObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(userData),
    }
    return fetch('http://localhost:3000/users', fetchConfigObj)
        .then((res) => res.json())
        .then((data) => (userId.textContent = data.id))
        .catch((error) => (errorMessage.textContent = error.message))
}
