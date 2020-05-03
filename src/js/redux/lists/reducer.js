import * as types from './types';

const innerState = {
  isFetching: false,
  items: [],
  page: 0,
  totalCount: 0,
};
const initialState = {
  trendingList: innerState,
  myLists: innerState,
};

const actionsMap = {
  [types.LIST_ADD]: (state, action) => {
    const object = {
      isFetching: false,
      items: action.list.results,
      totalCount: action.list.total_pages,
      page: action.list.page,
    };
    return {
      ...state,
      [action.id]: object,
    };
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
