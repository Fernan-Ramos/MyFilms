import { call, put, takeLatest } from 'redux-saga/effects';
import {
  setUser,
  SIGN_IN_GOOGLE,
  SIGN_IN_EMAIL,
  SIGN_UP
} from '../actions/auth';
import Firebase from '../../../config/firebase';
import AuthService from '../../services/api/AuthService';
import { addAsync, deleteAsync } from '../actions/async';

const firebase = new Firebase();

function* setUserInfo(userData) {
  AuthService.initToken(userData);
  yield put(setUser(userData));
  AuthService.goToLoggedInInitialPage();
}

function* signInGoogle() {
  try {
    const response = yield call(firebase.doSignInWithGoogle);
    const userData = {
      username: response.user.displayName,
      request_token: response.user.refreshToken,
      avatar: response.user.photoURL
    };
    AuthService.initToken(userData);
    yield call(firebase.setUser, response.user);
    yield call(setUserInfo, userData);
  } catch (error) {
    console.error(error);
  }
}

function* signIn(action) {
  try {
    yield put(addAsync('login'));
    const response = yield call(
      firebase.doSignInWithEmailAndPassword,
      action.username,
      action.password
    );
    const userData = {
      username: response.user.displayName,
      request_token: response.user.refreshToken
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
      firebase.doCreateUserWithEmailAndPassword,
      action.email,
      action.password
    );
    yield call(firebase.doSendEmailVerification);
    yield call(firebase.setUser, { ...response.user, displayName: action.username });
    const userData = {
      username: action.username,
      request_token: response.user.refreshToken
    };
    yield call(setUserInfo, userData);
  } catch (error) {
    console.error(error);
  } finally {
    yield put(deleteAsync('login'));
  }
}

function* authSaga() {
  yield takeLatest(SIGN_IN_GOOGLE, signInGoogle);
  yield takeLatest(SIGN_IN_EMAIL, signIn);
  yield takeLatest(SIGN_UP, signUp);
}

export default authSaga;
