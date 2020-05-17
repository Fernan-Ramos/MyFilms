import * as types from './types';

export function addAsync(label) {
  return {
    type: types.ASYNC_ADD,
    label,
  };
}

export function deleteAsync(label) {
  return {
    type: types.ASYNC_DELETE,
    label,
  };
}

export function setIsMobile(isMobile) {
  return {
    type: types.SET_MOBILE,
    isMobile,
  };
}
