import React from 'react';
import {connect} from 'react-redux';
import RestaurantHeader from './restaurant_header';
import {logout} from '../../actions/session_actions';
import {searchRestaurants} from '../../actions/restaurant_actions'

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    searchRestaurants: (search) => dispatch(searchRestaurants(search)),
    
})

export default connect(msp, mdp)(RestaurantHeader)