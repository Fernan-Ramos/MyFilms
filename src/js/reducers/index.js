import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import users from './users';
import auth from './auth';
import async from './async';


export default combineReducers({
  users,
  form,
  auth,
  async
});
