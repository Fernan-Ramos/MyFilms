import { FIREBASE_LIST_ADD, FIREBASE_LIST_ADD_ITEM } from '../../actions/firebase/lists';

const initialState = {
  myLists: []
};

const actionsMap = {
  [FIREBASE_LIST_ADD]: (state, action) => ({
    ...state,
    [action.id]: action.items
  }),
  [FIREBASE_LIST_ADD_ITEM]: (state, action) => ({
    ...state,
    [action.id]: [...state[action.id], action.item]
  })
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
