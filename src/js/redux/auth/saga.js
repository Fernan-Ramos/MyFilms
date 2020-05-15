import { call, put, takeLatest } from 'redux-saga/effects';
import { setUser } from './actions';
import * as types from './types';
import Firebase from '../../../config/firebase';
import AuthService from '../../services/api/AuthService';
import { addAsync, deleteAsync } from '../app/actions';

function* setUserInfo(userData) {
  AuthService.initToken(userData);
  yield put(setUser(userData));
  AuthService.goToLoggedInInitialPage();
}

function* signInGoogle() {
  try {
    const response = yield call(Firebase.doSignInWithGoogle);
    const userData = {
      username: response.user.displayName,
      request_token: response.user.refreshToken,
      avatar: response.user.photoURL,
    };
    AuthService.initToken(userData);
    yield call(Firebase.setUser, response.user);
    yield call(setUserInfo, userData);
  } catch (error) {
    console.error(error);
  }
}

function* signIn(action) {
  try {
    yield put(addAsync('login'));
    const response = yield call(
      Firebase.doSignInWithEmailAndPassword,
      action.username,
      action.password
    );
    const userData = {
      username: response.user.displayName,
      request_token: response.user.refreshToken,
    };
    yield call(setUserInfo, userData);
  } catch (error) {
    console.error(error);
  } finally {
    yield put(deleteAsync('login'));
  }
}

function* signUp(action) {
  try {
    yield put(addAsync('login'));
    const response = yield call(
      Firebase.doCreateUserWithEmailAndPassword,
      action.email,
      action.password
    );
    yield call(Firebase.doSendEmailVerification);
    yield call(Firebase.setUser, { ...response.user, displayName: action.username });
    const userData = {
      username: action.username,
      request_token: response.user.refreshToken,
    };
    yield call(setUserInfo, userData);
  } catch (error) {
    console.error(error);
  } finally {
    yield put(deleteAsync('login'));
  }
}

function* logout() {
  try {
    yield call(Firebase.doSignOut);
    AuthService.logout();
  } catch (error) {
    console.error(error);
  }
}

function* authSaga() {
  yield takeLatest(types.SIGN_IN_GOOGLE, signInGoogle);
  yield takeLatest(types.SIGN_IN_EMAIL, signIn);
  yield takeLatest(types.SIGN_UP, signUp);
  yield takeLatest(types.LOGOUT, logout);
}

export default authSaga;
