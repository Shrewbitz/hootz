import React from 'react';
import {connect} from 'react-redux';
import Nav from './nav';
import {logout} from '../../actions/session_actions';
import {searchRestaurants} from '../../actions/restaurant_actions'
const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    // restaurants: state.entities.restaurants
});

const mdp = dispatch => {
    // debugger
    return {
    searchRestaurants: (search) => dispatch(searchRestaurants(search)),
    logout: () => dispatch(logout())
    
}
}

export default connect(msp, mdp)(Nav)