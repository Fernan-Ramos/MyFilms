import { Map } from 'immutable';
import { ASYNC_ADD, ASYNC_DELETE } from 'js/redux/actions/async';

const initialState = Map({
  queue: 0,
  map: Map({}),
});

const actionsMap = {
  [ASYNC_ADD]: (state, action) => {
    const currentMap = state.get('map').set(action.label, true);
    return state.set('map', currentMap).set('queue', currentMap.size);
  },
  [ASYNC_DELETE]: (state, action) => {
    const currentMap = state.get('map').delete(action.label, true);
    return state.set('map', currentMap).set('queue', currentMap.size);
  }
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
