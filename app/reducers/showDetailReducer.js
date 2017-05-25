import { FETCH_DETAIL_REQUEST, FETCH_DETAIL_SUCCESS } from '../actions/showDetailActions';

const initialState = {
    data: [],
    isFetching: true
};

export default function fetchShows(state = initialState, action) {
    switch (action.type) {
        case FETCH_DETAIL_REQUEST:
            return state;
        case FETCH_DETAIL_SUCCESS:
            return {...state, data: action.payload, isFetching: false};
        default:
            return state;
    }
}