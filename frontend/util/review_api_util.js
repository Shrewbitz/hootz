export const fetchReviews = (restaurant_id) => (
    $.ajax({
        method: 'get',
        url: `/api/restaurants/${restaurant_id}/reviews`
    })
)


export const postReview = (review) => (
    $.ajax({
        method: 'post',
        url: `/api/restaurants/${review.restaurant_id}/reviews`,
        data: {review}
    })
)