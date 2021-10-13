import axios from 'axios';

const SERVER_URL = `http://127.0.0.1:8081`;

const login = (username, password) => {
    return axios.post(`${SERVER_URL}/signin`, {
        username: username,
        password: password
    })
}

const signup = (name, email, username, password) => {
    return axios.post(`${SERVER_URL}/signup`, {
        name: name,
        email: email,
        username: username,
        password: password
    })
}

const authService = {
    login,
    signup
}

export default authService

