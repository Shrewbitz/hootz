import { RECEIVE_REVIEW, RECEIVE_REVIEWS, CUT_REVIEW} from '../actions/review_actions'

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_REVIEW:
            const newReview = {[action.review.review.id]: action.review.review};
            return Object.assign({}, oldState, newReview);
        case CUT_REVIEW:
            const newState = Object.assign({}, oldState) 
            delete newState[action.review.review.id]
            return newState
        case RECEIVE_REVIEWS:
            return Object.assign({},  action.reviews)   //oldState 
        default:
            return oldState;
    }
}

export default reviewsReducer