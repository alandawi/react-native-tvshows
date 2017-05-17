import { combineReducers } from 'redux';
import allShowsReducer from './allShowsReducer';

export default combineReducers({
    allShows: allShowsReducer
})