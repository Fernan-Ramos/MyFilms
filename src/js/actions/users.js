export const USERS_FETCH = 'USERS_FETCH';
export const CREATE_USER = 'CREATE_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';

export function fetchUsersSuccess(users) {
    return {
        users,
        type: USERS_FETCH
    };
}

export function createUser(user) {
    return {
        user,
        type: CREATE_USER
    };
}

export function editUser(user) {
    return {
        user,
        type: EDIT_USER
    };
}

export function deleteUser(user) {
    return {
        user,
        type: DELETE_USER
    };
}
