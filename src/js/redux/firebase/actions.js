
import * as types from './types';

export function fetchFirebaseList(listName) {
  return {
    type: types.FIREBASE_LIST_FETCH,
    listName,
  };
}

export function fetchFirebaseListItem(list, listName) {
  return {
    type: types.FIREBASE_LIST_ITEM_FETCH,
    list,
    listName,
  };
}

export function fetchDeleteFirebaseList(listID, listName) {
  return {
    type: types.FIREBASE_LIST_DELETE_FETCH,
    listID,
    listName
  };
}


export function addFirebaseList(items, listName) {
  return {
    type: types.FIREBASE_LIST_ADD,
    items,
    listName,
  };
}
export function addFirebaseListItem(item, listName) {
  return {
    type: types.FIREBASE_LIST_ADD_ITEM,
    listName,
    item
  };
}

export function deleteFirebaseList(listID, listName) {
  return {
    type: types.FIREBASE_LIST_DELETE,
    listID,
    listName,
  };
}
