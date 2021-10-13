import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// layout
import IndexLayout from "../Layout/IndexLayout";
import AuthLayout from "../Layout/AuthLayout";

// admin views
import Home from "views/user/home";
import Catalog from "views/user/catalog";
import Product from "views/user/Product";

// admin views
import Dashboard from "views/admin/dashboard";
import Login from "views/admin/login";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin/:path?">
                    <AuthLayout>
                        <Switch>
                            <Route exact path='/admin/' component={Dashboard}/>
                            <Route exact path='/admin/login' component={Login}/>
                        </Switch>
                    </AuthLayout>
                </Route>

                <Route path="/:path?">
                    <IndexLayout>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/catalog' component={Catalog}/>
                            <Route path='/catalog/:slug' component={Product}/>
                            <Route path='*' />
                        </Switch>
                    </IndexLayout>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes

