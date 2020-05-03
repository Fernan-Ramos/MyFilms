
import * as types from './types';

export function fetchGetLists(listName) {
  return {
    type: types.FETCH_GET_LISTS,
    listName,
  };
}

export function fetchCreateList(list, listName) {
  return {
    type: types.FETCH_CREATE_LIST,
    list,
    listName,
  };
}

export function fetchDeleteList(listID, listName) {
  return {
    type: types.FETCH_DELETE_LIST,
    listID,
    listName
  };
}

export function fetchEditList(list, listID, listName) {
  return {
    type: types.FETCH_EDIT_LIST,
    list,
    listID,
    listName,
  };
}


export function setAddList(items, listName) {
  return {
    type: types.SET_ADD_LIST,
    items,
    listName,
  };
}
export function setCreateList(item, listName) {
  return {
    type: types.SET_CREATE_LIST,
    listName,
    item
  };
}

export function setDeleteList(listID, listName) {
  return {
    type: types.SET_DELETE_LIST,
    listID,
    listName,
  };
}

export function setEditList(values, listID, listName) {
  return {
    type: types.SET_EDIT_LIST,
    values,
    listID,
    listName,
  };
}
