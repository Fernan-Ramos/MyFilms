import { fork, all } from 'redux-saga/effects';
import firebaseLists from './firebase';
import authSaga from './auth';

export default function* rootSaga() {
  yield all([
    fork(firebaseLists),
    fork(authSaga)
  ]);
}
