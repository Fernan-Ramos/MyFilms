import { Map } from 'immutable';
import { INFO_SET } from 'js/actions/auth';

const initialState = Map({
  tokenData: null
});

const actionsMap = {
  [INFO_SET]: (state, action) => state.merge({
    tokenData: action.info
  })
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
