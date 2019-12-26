import AuthService from 'js/services/api/AuthService';

export const USER_SET = 'USER_SET';
export const INFO_SET = 'INFO_SET';
export const USER_UNSET = 'USER_UNSET';

export function setUser(data) {
  return {
    type: USER_SET,
    data
  };
}

export function setInfo(info) {
  return {
    type: INFO_SET,
    info
  };
}

export function unsetUser() {
  return {
    type: USER_UNSET
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