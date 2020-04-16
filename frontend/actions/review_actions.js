import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const receiveReview = (review) => {
    return {
    type: RECEIVE_REVIEW,
    review
    }
}


export const fetchReviews = restaurant_id => dispatch => (
    APIUtil.fetchReviews(restaurant_id).then(reviews => (
    dispatch(receiveReviews(reviews)))));



export const postReview = review => dispatch => (
    APIUtil.postReview(review).then(review => (
    dispatch(receiveReview(review)))));
