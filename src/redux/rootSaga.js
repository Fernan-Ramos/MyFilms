import { fork, all } from 'redux-saga/effects';
import firebaseLists from './firebase/saga';
import authSaga from './auth/saga';

export default function* rootSaga() {
  yield all([fork(firebaseLists), fork(authSaga)]);
}
