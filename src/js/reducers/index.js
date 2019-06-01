import { combineReducers } from 'redux';

import auth from './auth';
import async from './async';
import lists from './lists';


export default combineReducers({
  auth,
  async,
  lists,
});
