import React, {useState} from "react";
import ButtonLoader from "../../components/ButtonLoader";

import auth from 'api/auth'
import {toast} from "react-toastify";

export default function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loader, setLoader] = useState(false);

    // function validateForm() {
    //     return email.length === 0 && password.length === 0;
    // }

    function signIn() {
        auth.login(email, password)
            .then(function (response)  {
                // store token to localStorage
                localStorage.setItem('access_token', response.data.data.token);
                // redirect to index
                window.location = "/"
            })
            .catch(function (error) {
                if (error.response) {
                    /** @param data.messenger **/
                    // notification error
                    toast.error(error.response.data.messenger);
                } else {

                }
                // set display button
                setLoader(false)
            });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLoader(true);
        signIn()
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
                                <input type="password" className="form-control" placeholder="Enter password"
                                       value={password}
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

                        <ButtonLoader isLoading={loader}/>
                    </form>
                </div>
            </div>
        </div>
    )
}
