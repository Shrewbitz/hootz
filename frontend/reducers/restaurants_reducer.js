import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS} from '../actions/restaurant_actions'

const restaurantsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_RESTAURANT:
            const newRestaurant = {[action.restaurant.id]: action.restaurant};
            return Object.assign({}, oldState, newRestaurant);
        case RECEIVE_RESTAURANTS:
            return Object.assign({}, oldState, action.restaurants)    
        default:
            return oldState;
    }
}

export default restaurantsReducer