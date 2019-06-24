import { Map } from 'immutable';
import { LATEST_ADD } from 'js/actions/latest';

const initialState = Map({

});

const actionsMap = {
  [LATEST_ADD]: (state, action) => state.merge({
    latestMovie: action.latestMovie,
  })
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
