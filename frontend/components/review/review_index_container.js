import {connect} from 'react-redux';
import review_index from './review_index';
import {fetchReviews} from '../../actions/review_actions'
const msp = state => {
    return {
    reviews: state.entities.reviews,
    restaurants: state.entities.restaurant
    }
};

const mdp = dispatch => ({
    fetchReviews: (restaurant_id) => dispatch(fetchReviews(restaurant_id)),
})

export default connect(msp, mdp)(review_index)