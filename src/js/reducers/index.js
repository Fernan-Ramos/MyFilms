import { combineReducers } from 'redux';

import auth from './auth';
import async from './async';
import lists from './lists';
import latest from './latest';
import layout from './layout';


export default combineReducers({
  auth,
  async,
  lists,
  latest,
  layout
});
