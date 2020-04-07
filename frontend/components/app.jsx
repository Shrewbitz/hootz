import React from 'react';
import {Provider} from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignupContainer from './session/signup_container'
import Main from './main/main'

const App = () => (
    <div>
        hello
        <Route exact path="/" component={Main}/>
        <Route path="/signup" component={SignupContainer}/>
    </div>
)

export default App;