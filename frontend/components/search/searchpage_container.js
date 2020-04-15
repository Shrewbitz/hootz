import {connect} from 'react-redux';
import searchpage from './searchpage';
import {searchRestaurants} from '../../actions/restaurant_actions'
const msp = state => (
{
    restaurants: state.entities.restaurants
});

const mdp = dispatch => ({
    searchRestaurants: (search) => dispatch(searchRestaurants(search)),
})

export default connect(msp, mdp)(searchpage)