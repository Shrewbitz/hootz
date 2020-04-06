import {combineReducers} from 'redux'
import session from './session_reducer'
import errors from './errors_reducer'
import entities from './entitites_reducer'

const rootReducer = combineReducers({
    entities: entities,
    session: session,
    errors: errors,
})

export default rootReducer;