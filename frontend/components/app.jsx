import React from 'react';
import {Provider} from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignupContainer from './session/signup_container'
import Main from './main/main'
import NavContainer from './nav/nav_container'
import LoginContainer from './session/login_container'
import {AuthRoute} from '../util/route_utils'


const App = () => (
    <div>
        <Route path="/" component={NavContainer}/>
        <Route exact path="/" component={Main}/>
        <AuthRoute path="/login" component={LoginContainer}/>
        <AuthRoute path="/signup" component={SignupContainer}/>
    </div>
)

export default App;