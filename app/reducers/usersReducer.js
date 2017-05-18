import { SHOW_USERS } from '../actions';

const initialState = {
    list: []
};

export default function showUsers(state = initialState, action) {
    switch (action.type) {
        case SHOW_USERS:
            return Object.assign({}, state, {list: action.payload});
        default:
            return state
    }
}

