import React from 'react';
import {Provider} from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import NavContainer from './nav/nav_container'
import RestaurantShowContainer from './restaurant/restaurant_container'
import SignupHeader from './signup_header/signup_header'
import Footer from './footer/footer'
import {AuthRoute} from '../util/route_utils'


const App = () => (
    <div>
        <Route exact path="/" component={NavContainer}/>
        <Route path="/login" component={SignupHeader}/>
        <AuthRoute path="/login" component={LoginContainer}/>
        <Route path="/signup" component={SignupHeader}/>
        <AuthRoute path="/signup" component={SignupContainer}/>
        <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer}/>
        <Route path="/" component={Footer}/>
    </div>
)

export default App;