import { combineReducers } from 'redux';
import showsReducer from './showsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    allShows: showsReducer,
    allUsers: usersReducer
})