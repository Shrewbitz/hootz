import { RECEIVE_REVIEW, RECEIVE_REVIEWS} from '../actions/review_actions'

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_REVIEW:
            const newReview = {[action.review.id]: action.review};
            return Object.assign({}, oldState, newReview);
        case RECEIVE_REVIEWS:
            return Object.assign({},  action.reviews)   //oldState 
        default:
            return oldState;
    }
}

export default reviewsReducer