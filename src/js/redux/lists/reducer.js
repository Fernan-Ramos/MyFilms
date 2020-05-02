import * as types from './types';
import { Map } from 'immutable';


const innerState = () => Map({
  isFetching: false,
  items: [],
  page: 0,
  totalCount: 0,
});

const initialState = Map({
  trendingList: innerState(),
  myLists: innerState(),
});

const actionsMap = {
  [types.LIST_ADD]: (state, action) => state.update(action.id, item => item.merge({
    isFetching: false,
    items: action.list.results,
    totalCount: action.list.total_pages,
    page: action.list.page
  })),
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
