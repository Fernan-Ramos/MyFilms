import { combineReducers } from 'redux';

import users from './users';
import auth from './auth';
import async from './async';


export default combineReducers({
  users,
  auth,
  async
});
