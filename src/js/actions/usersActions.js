import UserService from '../services/UserService';
import {
  fetchUsersSuccess, createUser, editUser, deleteUser
} from './users';

export function fetchUsers() {
  return async (dispatch) => {
    function onSuccess(users) {
      dispatch(fetchUsersSuccess(users));
      return users;
    }

    function onError(error) {
      // dispatch({ type: ERROR_GENERATED, error });
      return error;
    }
    try {
      const users = await UserService.list();
      return onSuccess(users);
    } catch (error) {
      return onError(error);
    }
  };
}

export function fetchCreateUser(params) {
  return async (dispatch) => {
    function onSuccess(user) {
      dispatch(createUser(user));
      return user;
    }
    function onError(error) {
      // dispatch({ type: ERROR_GENERATED, error });
      return error;
    }
    try {
      const user = await UserService.create(params);
      return onSuccess(user);
    } catch (error) {
      return onError(error);
    }
  };
}


export function fetchEditUser(params) {
  return async (dispatch) => {
    function onSuccess(user) {
      dispatch(editUser(user));
      return user;
    }
    function onError(error) {
      // dispatch({ type: ERROR_GENERATED, error });
      return error;
    }
    try {
      const user = await UserService.create(params);
      return onSuccess(user);
    } catch (error) {
      return onError(error);
    }
  };
}


export function fetchDeleteUser(userID) {
  return async (dispatch) => {
    function onSuccess(user) {
      dispatch(deleteUser(user));
      return user;
    }
    function onError(error) {
      // dispatch({ type: ERROR_GENERATED, error });
      return error;
    }
    try {
      await UserService.delete(userID);
      return onSuccess(userID);
    } catch (error) {
      return onError(error);
    }
  };
}
