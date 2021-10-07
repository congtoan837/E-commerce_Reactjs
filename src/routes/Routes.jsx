import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Login from '../views/auth/login'

import Index from '../views/index/home'
import Catalog from '../views/index/catalog'
import Product from "../views/index/Product";

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Index}/>
            <Route path='/catalog' exact component={Catalog}/>
            <Route path='/catalog/:slug' component={Product}/>

            <Route path='/auth' exact component={Index}/>
            <Route path='/auth/login' exact component={Login}/>
        </Switch>
    )
}

export default Routes
