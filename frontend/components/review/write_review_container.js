import {connect} from 'react-redux';
import write_review from './write_review';
import {fetchRestaurant} from '../../actions/restaurant_actions'
import {postReview} from '../../actions/review_actions'
const msp = (state, ownProps) => {
    return {
    ownProps: ownProps,
    reviews: state.entities.reviews,
    restaurants: state.entities.restaurant,
    session: state.session
    
    }
};

const mdp = dispatch => ({
    postReview: (restaurant_id) => dispatch(postReview(restaurant_id)),
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId)),
})

export default connect(msp, mdp)(write_review)