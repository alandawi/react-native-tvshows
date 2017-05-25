import { getShowDetail } from '../api/endpoints';

export const FETCH_DETAIL_REQUEST  = 'FETCH_DETAIL_REQUEST';
export const FETCH_DETAIL_SUCCESS  = 'FETCH_DETAIL_SUCCESS';
export const FETCH_DETAIL_ERROR    = 'FETCH_DETAIL_ERROR';

export function fetchShowDetailRequest(){
    return {
        type: FETCH_DETAIL_REQUEST
    }
}

export function fetchShowDetailSuccess(payload) {
    return {
        type: FETCH_DETAIL_SUCCESS,
        payload
    }
}

export function fetchShowDetailError() {
    return {
        type: FETCH_DETAIL_ERROR
    }
}

export function fetchShowDetail(id) {
    return (dispatch) => {
        dispatch(fetchShowDetailRequest());
        return getShowDetail(id).then(([response, json]) =>{
            if (response.status === 200) {
                dispatch(fetchShowDetailSuccess(json))
            } else {
                dispatch(fetchShowDetailError())
            }
        })
    }
}

