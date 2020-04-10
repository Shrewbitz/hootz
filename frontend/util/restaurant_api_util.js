export const fetchRestaurant = id => (
    $.ajax({
        method: 'get',
        url: `/api/restaurants/${id}`
    })
)