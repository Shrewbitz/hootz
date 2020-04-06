import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {login, logout, signup} from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {

    window.signup = signup;
    window.login = login;
    window.logout = logout;


    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, root)
})

//test