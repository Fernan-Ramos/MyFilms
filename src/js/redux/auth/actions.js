import AuthService from 'js/services/api/AuthService';
import * as types from './types';

export function setUser(tokenData) {
  return {
    type: types.USER_SET,
    tokenData,
  };
}

export function signInGoogle() {
  return {
    type: types.SIGN_IN_GOOGLE,
  };
}

export function signInEmail(username, password) {
  return {
    type: types.SIGN_IN_EMAIL,
    username,
    password,
  };
}

export function signUp(email, password, username) {
  return {
    type: types.SIGN_UP,
    email,
    password,
    username,
  };
}

export async function login(tokenData, dispatch) {
  AuthService.initToken(tokenData);
  dispatch({
    type: types.USER_SET,
    tokenData,
  });
  AuthService.goToLoggedInInitialPage();
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}
