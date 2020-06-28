import {connect} from 'react-redux';
import write_review from './write_review';
import {postReview} from '../../actions/review_actions'
const msp = (state, ownProps) => {
    // debugger
    return {
    ownProps: ownProps,
    reviews: state.entities.reviews,
    restaurants: state.entities.restaurant,
    session: state.session
    }
};

const mdp = dispatch => ({
    postReview: (restaurant_id) => dispatch(postReview(restaurant_id)),
})

export default connect(msp, mdp)(write_review)