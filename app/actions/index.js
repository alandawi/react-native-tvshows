import axios from 'axios';

export const SHOW_USERS = 'SHOW_USERS';

export default function showUsers() {

    return (dispatch, getState) => {
        axios.get('http://api.tvmaze.com/shows/1')
            .then((response) => {
                console.log(response);
                dispatch( { type: SHOW_USERS, payload: response.data} )
            })
    }
}