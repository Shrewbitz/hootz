import {connect} from 'react-redux';
import restaurant_index from './restaurant_index';
import {fetchRestaurants} from '../../actions/restaurant_actions'
const msp = state => {
    // debugger
    return {
    restaurants: state.entities.restaurant
    }
};

const mdp = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
})

export default connect(msp, mdp)(restaurant_index)