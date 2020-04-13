export const fetchRestaurant = id => (
    $.ajax({
        method: 'get',
        url: `/api/restaurants/${id}`
    })
)

export const fetchRestaurants = () => (
    $.ajax({
        method: 'get',
        url: '/api/restaurants'
    })
)