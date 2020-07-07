import {connect} from 'react-redux';
import review_index from './review_index';
import {fetchReviews} from '../../actions/review_actions';
import { deleteReview } from '../../actions/review_actions';
const msp = (state, ownProps) => {
    // debugger
    return {
    ownProps: ownProps,
    reviews: state.entities.reviews,
    restaurants: state.entities.restaurant,
    user: state.session.id
    }
};

const mdp = dispatch => 
    ({
    fetchReviews: (restaurant_id) => dispatch(fetchReviews(restaurant_id)),
    deleteReview: (review_id) => dispatch(deleteReview(review_id))
})

export default connect(msp, mdp)(review_index)