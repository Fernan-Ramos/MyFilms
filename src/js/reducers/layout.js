import { Map } from 'immutable';
import { SET_MOBILE } from 'js/actions/layout';

const initialState = Map({
  isMobile: false,
});

const actionsMap = {
  [SET_MOBILE]: (state, action) => state.merge({
    isMobile: action.isMobile,
  })
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
