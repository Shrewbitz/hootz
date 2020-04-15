import {combineReducers} from 'redux';

import users from './users_reducer';
import restaurantsReducer from './restaurants_reducer';
import reviewsReducer from './reviews_reducer';

export default combineReducers({
    users: users,
    restaurant: restaurantsReducer,
    reviews: reviewsReducer
});