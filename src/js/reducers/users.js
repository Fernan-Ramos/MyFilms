
import { USERS_FETCH, CREATE_USER, EDIT_USER, DELETE_USER } from '../actions/users';
import { Map, List, fromJS } from 'immutable';

const initialState = Map({
    users: List([])
});

const actionsMap = {
    [USERS_FETCH]: (state, action) => {
        return state.merge({
            users: action.users,
        })
    },
    [CREATE_USER]: (state, action) => {
        const users = state.get('users');
        users.push(action.user);
        return state.setIn(['users', 'users'], fromJS(users));
    },
    [EDIT_USER]: (state, action) => {
        return state.updateIn(['users', action.id], () => fromJS(action.item));
    },
    [DELETE_USER]: (state, action) => {
        const users = state.get('users');
        users.splice(users.indexOf(action.user), 1);
        // return state.update('users', item => item.splice(item.indexOf(action.user), 1));
        return state.setIn(['users', 'users'], fromJS(users));
    },
}

export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}