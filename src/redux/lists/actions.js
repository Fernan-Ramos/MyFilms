import * as types from './types';

export function addList(list, id) {
  return {
    type: types.LIST_ADD,
    list,
    id,
  };
}

export function deleteList(label) {
  return {
    type: types.LIST_DELETE,
    label,
  };
}

export function fetchTrending() {
  return {
    type: types.FETCH_TRENDING,
  };
}
