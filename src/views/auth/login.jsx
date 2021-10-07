import React, { useState } from "react";
import ButtonLoader from "../../components/ButtonLoader";
import axios from "axios";
import {toast} from "react-toastify";

export default function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loader, setLoader] = useState(false);

    const SERVER_URL = `http://127.0.0.1:8081`;

    function login(username, password) {
        axios
            .post(`${SERVER_URL}/signin`, {
                username: username,
                password: password
            })
            .then(res => {
                localStorage.setItem('access_token', res.data.data.token);
                setLoader(false);
                window.location = "/"
            })
            .catch(error => {
                if (error.response) {
                    /** @param data.messenger **/
                    toast.error(error.response.data.messenger);
                }
                setLoader(false);
            })
    }

    function validateForm() {
        return email.length === 0 && password.length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLoader(true);
        login(email, password);
    }

    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="auth-inner">
                    <div className="auth-header">
                        <h2>Sign In</h2>
                    </div>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter email" value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-group">
                                <input type="password" className="form-control" placeholder="Enter password" value={password}
                                       onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>

                        <div className="auth-form-utils">
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>
                            <p className="forgot-password text-right">
                                Forgot password?
                            </p>
                        </div>

                        <ButtonLoader isLoading={loader} />
                    </form>
                </div>
            </div>
        </div>
    )
}
