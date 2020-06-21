import {connect} from 'react-redux';
import write_review from './write_review';
import {fetchReviews} from '../../actions/review_actions'
const msp = (state, ownProps) => {
    // debugger
    return {
    ownProps: ownProps,
    reviews: state.entities.reviews,
    restaurants: state.entities.restaurant
    }
};

const mdp = dispatch => ({
    fetchReviews: (restaurant_id) => dispatch(fetchReviews(restaurant_id)),
})

export default connect(msp, mdp)(write_review)