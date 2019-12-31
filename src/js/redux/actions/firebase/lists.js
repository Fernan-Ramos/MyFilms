
export const FIREBASE_LIST_FETCH = 'FIREBASE_LIST_FETCH';
export const FIREBASE_LIST_ITEM_FETCH = 'FIREBASE_LIST_ITEM_FETCH';
export const FIREBASE_LIST_ADD_ITEM = 'FIREBASE_LIST_ADD_ITEM';
export const FIREBASE_LIST_ADD = 'FIREBASE_LIST_ADD';
export const FIREBASE_LIST_DELETE_FETCH = 'FIREBASE_LIST_DELETE_FETCH';
export const FIREBASE_LIST_DELETE = 'FIREBASE_LIST_DELETE';

export function fetchFirebaseList(listName) {
  return {
    type: FIREBASE_LIST_FETCH,
    listName,
  };
}

export function fetchFirebaseListItem(list, listName) {
  return {
    type: FIREBASE_LIST_ITEM_FETCH,
    list,
    listName,
  };
}

export function fetchDeleteFirebaseList(listID, listName) {
  return {
    type: FIREBASE_LIST_DELETE_FETCH,
    listID,
    listName
  };
}


export function addFirebaseList(items, listName) {
  return {
    type: FIREBASE_LIST_ADD,
    items,
    listName,
  };
}
export function addFirebaseListItem(item, listName) {
  return {
    type: FIREBASE_LIST_ADD_ITEM,
    listName,
    item
  };
}

export function deleteFirebaseList(listID, listName) {
  return {
    type: FIREBASE_LIST_DELETE,
    listID,
    listName,
  };
}
