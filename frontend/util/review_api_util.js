export const fetchReviews = (restaurant_id) => (
    $.ajax({
        method: 'get',
        url: `/api/restaurants/${restaurant_id}/reviews`,
        data: restaurant_id
    })
)


export const postReview = (review) => (
    $.ajax({
        method: 'post',
        url: `/api/restaurants/${review.restaurant_id}/reviews`,
        data: {review}
    })
)

export const deleteReview = (review) => {
    // debugger
    return $.ajax({
        method: 'delete',
        url: `/api/restaurants/${review.restaurant_id}/reviews/${review.id}`,
        // data: {review}
    })
}


