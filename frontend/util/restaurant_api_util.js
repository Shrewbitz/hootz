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

export const searchRestaurants = (search) => (
    $.ajax({
        method: 'get',
        url: `/api/restaurants/search/${search.search1 + "_" + search.search2}`,
    })
)
