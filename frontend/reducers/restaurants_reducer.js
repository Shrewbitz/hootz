import { RECEIVE_RESTAURANT} from '../actions/restaurant_actions'

const restaurantsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_RESTAURANT:
            const newRestaurant = {[action.restaurant.id]: action.restaurant};
            return Object.assign({}, oldState, newRestaurant);
        default:
            return oldState;
    }
}

export default restaurantsReducer