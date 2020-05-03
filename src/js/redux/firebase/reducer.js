import * as types from './types';

const initialState = {
  myLists: [],
};

const actionsMap = {
  [types.SET_ADD_LIST]: (state, action) => ({
    ...state,
    [action.listName]: action.items,
  }),
  [types.SET_CREATE_LIST]: (state, action) => ({
    ...state,
    [action.listName]: [...state[action.listName], action.item],
  }),
  [types.SET_DELETE_LIST]: (state, action) => ({
    ...state,
    [action.listName]: state[action.listName].filter((item) => item.id !== action.listID),
  }),
  [types.SET_EDIT_LIST]: (state, action) => {
    const listEdited = state[action.listName].map((item) =>
      item.id === action.listID ? { ...item, ...action.values } : item
    );
    return {
      ...state,
      [action.listName]: listEdited,
    };
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
