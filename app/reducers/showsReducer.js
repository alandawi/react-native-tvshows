import { FETCH_REQUEST, FETCH_SUCCESS } from '../actions/showsActions';

const initialState = {
    list: [],
    isFetching: true
};

export default function fetchShows(state = initialState, action) {
    switch (action.type) {
        case FETCH_REQUEST:
            return state;
        case FETCH_SUCCESS:
            return {...state, list: action.payload, isFetching: false};
        default:
            return state;
    }
}