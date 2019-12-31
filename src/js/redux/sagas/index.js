import { fork } from 'redux-saga/effects';
import firebaseLists from './firebase';

export default function* rootSaga() {
  yield [
    fork(firebaseLists),
  ];
}
