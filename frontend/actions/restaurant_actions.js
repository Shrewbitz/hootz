import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const receiveRestaurant = (restaurant) => {
    return {
    type: RECEIVE_RESTAURANT,
    restaurant
    }
}

export const fetchRestaurant = id => dispatch => (
    APIUtil.fetchRestaurant(id).then(restaurant => (
    dispatch(receiveRestaurant(restaurant)))));