import * as types from './types';


const initialState = {
  myLists: [],
};

const actionsMap = {
  [types.FIREBASE_LIST_ADD]: (state, action) => ({
    ...state,
    [action.listName]: action.items,
  }),
  [types.FIREBASE_LIST_ADD_ITEM]: (state, action) => ({
    ...state,
    [action.listName]: [...state[action.listName], action.item],
  }),
  [types.FIREBASE_LIST_DELETE]: (state, action) => ({
    ...state,
    [action.listName]: state[action.listName].filter((item) => item.id !== action.listID),
  }),
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
