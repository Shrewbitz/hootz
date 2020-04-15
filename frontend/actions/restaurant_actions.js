import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
// export const FIND_RESTAURANTS = 'FIND_RESTAURANTS';


export const receiveRestaurants = (restaurants) => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

export const receiveRestaurant = (restaurant) => {
    return {
    type: RECEIVE_RESTAURANT,
    restaurant
    }
}

// export const findRestaurants = (restaurants) => ({
//     type: FIND_RESTAURANTS,
//     restaurants
// })

export const fetchRestaurants = () => dispatch => (
    APIUtil.fetchRestaurants().then(restaurants => (
    dispatch(receiveRestaurants(restaurants)))));

export const fetchRestaurant = id => dispatch => (
    APIUtil.fetchRestaurant(id).then(restaurant => (
    dispatch(receiveRestaurant(restaurant)))));

export const searchRestaurants = (search) => dispatch => (
    APIUtil.searchRestaurants(search).then(restaurants => (
    dispatch(receiveRestaurants(restaurants)))));