import React from 'react'

import {BrowserRouter, Route} from 'react-router-dom'

import Routes from '../routes/Routes'
import {ToastContainer} from "react-toastify";

const AuthLayout = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <ToastContainer />
                    <Routes/>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default AuthLayout
