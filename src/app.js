import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/** Layouts **/
import IndexLayout from "Layout/IndexLayout";
import AuthLayout from "./Layout/AuthLayout";

import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={IndexLayout} />
                <Route path="/catalog" component={IndexLayout} />
                <Route path="/auth/login" component={AuthLayout} />
            </BrowserRouter>
        );
    }
}

export default App;
