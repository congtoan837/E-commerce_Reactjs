import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Login from '../views/auth/login'

import Index from '../views/index/home'
import Catalog from '../views/index/catalog'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Index}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/catalog' exact component={Catalog}/>
        </Switch>
    )
}

export default Routes
