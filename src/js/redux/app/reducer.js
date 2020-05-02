import { Map } from 'immutable';
import * as types from './types';

const initialState = Map({
  queue: 0,
  map: Map({}),
  isMobile: false,
});

const actionsMap = {
  [types.ASYNC_ADD]: (state, action) => {
    const currentMap = state.get('map').set(action.label, true);
    return state.set('map', currentMap).set('queue', currentMap.size);
  },
  [types.ASYNC_DELETE]: (state, action) => {
    const currentMap = state.get('map').delete(action.label, true);
    return state.set('map', currentMap).set('queue', currentMap.size);
  },
  [types.SET_MOBILE]: (state, action) =>
    state.merge({
      isMobile: action.isMobile,
    }),
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
