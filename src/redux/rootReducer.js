import { combineReducers } from 'redux';

import auth from './auth/reducer';
import app from './app/reducer';
import lists from './lists/reducer';
import firebase from './firebase/reducer';

export default combineReducers({
  auth,
  app,
  lists,
  firebase,
});
