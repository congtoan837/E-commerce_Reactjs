import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

const IndexLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="main">
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default IndexLayout
