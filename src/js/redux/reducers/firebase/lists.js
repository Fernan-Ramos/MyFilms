import { FIREBASE_LIST_ADD, FIREBASE_LIST_ADD_ITEM, FIREBASE_LIST_DELETE } from '../../actions/firebase/lists';

const initialState = {
  myLists: []
};

const actionsMap = {
  [FIREBASE_LIST_ADD]: (state, action) => ({
    ...state,
    [action.listName]: action.items
  }),
  [FIREBASE_LIST_ADD_ITEM]: (state, action) => ({
    ...state,
    [action.listName]: [...state[action.listName], action.item]
  }),
  [FIREBASE_LIST_DELETE]: (state, action) => ({
    ...state,
    [action.listName]: state[action.listName].filter(item => item.id !== action.listID)
  })
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
