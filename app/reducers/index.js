import { combineReducers } from 'redux';
import showsReducer from './showsReducer';

export default combineReducers({
    allShows: showsReducer
})