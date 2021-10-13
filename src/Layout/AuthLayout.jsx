import React from 'react'

import {ToastContainer} from "react-toastify";

const AuthLayout = ({children}) => {
    return (
        <div>
            <ToastContainer/>
            {children}
        </div>
    )
}

export default AuthLayout
