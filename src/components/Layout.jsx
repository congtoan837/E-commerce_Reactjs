import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Routes from '../routes/Routes'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    {
                        props.location.pathname !== '/login' ? <Header {...props}/> : null
                    }
                    <div className="container">
                        <div className="main">
                            <Routes/>
                        </div>
                    </div>
                    {
                        props.location.pathname !== '/login' ? <Footer /> : null
                    }
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
