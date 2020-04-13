import {connect} from 'react-redux';
import restaurant_index from './restaurant_index';
import {fetchRestaurants} from '../../actions/restaurant_actions'
const msp = state => ({
    restaurants: state.entities.restaurants
});

const mdp = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
})

export default connect(msp, mdp)(restaurant_index)