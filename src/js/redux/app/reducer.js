import * as types from './types';

const initialState = {
  queue: 0,
  isMobile: false,
};

const actionsMap = {
  [types.ASYNC_ADD]: (state) => ({
    ...state,
    queue: state.queue + 1,
  }),
  [types.ASYNC_DELETE]: (state) => ({
    ...state,
    queue: state.queue - 1,
  }),
  [types.SET_MOBILE]: (state, action) => ({ ...state, isMobile: action.isMobile }),
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
