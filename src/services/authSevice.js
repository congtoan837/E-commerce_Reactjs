import React from 'react';
import axios from 'axios';
import {toast} from "react-toastify";

const SERVER_URL = `http://127.0.0.1:8081`;

export default class authSevice extends React.Component {
    static login(username, password) {
        axios
            .post(`${SERVER_URL}/signin`, {
                username: username,
                password: password
            })
            .then(res => {
                localStorage.setItem('access_token', res.data.data.token);
                window.location = "/"
            })
            .catch(error => {
                if (error.response) {
                    toast.error(error.response.data.messenger);
                }
            })
    }
}
