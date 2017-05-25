import { combineReducers } from 'redux';
import showsReducer from './showsReducer';
import showDetailReducer from './showDetailReducer';

export default combineReducers({
    allShows: showsReducer,
    showDetail: showDetailReducer
})