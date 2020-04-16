import {connect} from 'react-redux';
import {fetchRestaurant} from '../../actions/restaurant_actions'
import Restaurant from './restaurant'

const msp = (state, ownProps) => {
    // debugger
    
    return {
    reviews: state.entities.reviews,
    restaurants: state.entities.restaurant[ownProps.match.params.restaurantId]
    }
};

const mdp = dispatch => ({
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId))
});


  

export default connect(msp,mdp)(Restaurant)