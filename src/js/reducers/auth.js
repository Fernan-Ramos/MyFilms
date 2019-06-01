import { Map } from 'immutable';
import { USER_SET } from 'js/actions/auth';

const initialState = Map({
  tokenData: null,
});

const actionsMap = {
  [USER_SET]: (state, action) => state.merge({
    tokenData: action.tokenData.request_token,
    sessionID: action.tokenData.session_id,
    username: action.tokenData.username,
    avatar: action.tokenData.avatar,
    iso_3166_1: action.tokenData.iso_3166_1
  })
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
