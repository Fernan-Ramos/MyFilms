export const FIREBASE_LIST_ADD_ITEM = 'FIREBASE_LIST_ADD_ITEM';
export const FIREBASE_LIST_ADD = 'FIREBASE_LIST_ADD';

export function addFirebaseList(items, id) {
  return {
    type: FIREBASE_LIST_ADD,
    id,
    items
  };
}

export function addFirebaseListItem(item, id) {
  return {
    type: FIREBASE_LIST_ADD_ITEM,
    id,
    item
  };
}
