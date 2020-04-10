import {connect} from 'react-redux';
import {fetchRestaurant} from '../../actions/restaurant_actions'
import Restaurant from './restaurant'

const mdp = dispatch => ({
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId))
});


  

export default connect(null,mdp)(Restaurant)