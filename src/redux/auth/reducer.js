import * as types from './types';

const initialState = {
  tokenData: null,
};

const actionsMap = {
  [types.USER_SET]: (state, action) => ({
    ...state,
    tokenData: action.tokenData.request_token,
    username: action.tokenData.username,
    avatar: action.tokenData.avatar,
  }),
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
