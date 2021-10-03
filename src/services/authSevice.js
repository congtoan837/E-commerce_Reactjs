import React from 'react';

import axios from 'axios';

export default class authSevice extends React.Component {

    static login(username, password) {
        axios
            .post(`http://127.0.0.1:8081/signin`, {
                username: username,
                password: password
            })
            .then(res => {
                console.log(res.data.data);
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                }
            })
    }
}
