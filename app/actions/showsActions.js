import { getShows } from '../api/endpoints';

export const FETCH_REQUEST  = 'FETCH_REQUEST';
export const FETCH_SUCCESS  = 'FETCH_SUCCESS';
export const FETCH_ERROR    = 'FETCH_ERROR';

export function fetchShowsRequest(){
    return {
        type: FETCH_REQUEST
    }
}

export function fetchShowsSuccess(payload) {
    return {
        type: FETCH_SUCCESS,
        payload
    }
}

export function fetchShowsError() {
    return {
        type: FETCH_ERROR
    }
}

export function fetchShows() {
    return (dispatch) => {
        dispatch(fetchShowsRequest());
        return getShows().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchShowsSuccess(json))
            } else {
                dispatch(fetchShowsError())
            }
        })
    }
}