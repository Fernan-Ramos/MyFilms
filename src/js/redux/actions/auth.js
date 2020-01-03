import AuthService from 'js/services/api/AuthService';

export const USER_SET = 'USER_SET';
export const SIGN_IN_GOOGLE = 'SIGN_IN_GOOGLE';
export const SIGN_IN_EMAIL = 'SIGN_IN_EMAIL';
export const SIGN_UP = 'SIGN_UP';

export function setUser(tokenData) {
  return {
    type: USER_SET,
    tokenData
  };
}

export function signInGoogle() {
  return {
    type: SIGN_IN_GOOGLE
  };
}

export function signInEmail(username, password) {
  return {
    type: SIGN_IN_EMAIL,
    username,
    password
  };
}

export function signUp(email, password, username) {
  return {
    type: SIGN_UP,
    email,
    password,
    username
  };
}

export async function login(tokenData, dispatch) {
  AuthService.initToken(tokenData);
  dispatch({
    type: USER_SET,
    tokenData,
  });
  AuthService.goToLoggedInInitialPage();
}
