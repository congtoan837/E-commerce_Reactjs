import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Routes from '../routes/Routes'

const IndexLayout = () => {
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

export default IndexLayout
