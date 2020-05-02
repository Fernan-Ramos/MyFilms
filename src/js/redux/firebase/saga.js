import { call, put, takeEvery } from 'redux-saga/effects';
import { addFirebaseList, addFirebaseListItem, deleteFirebaseList } from './actions';
import * as types from './types';
import Firebase from '../../../config/firebase';

const firebase = new Firebase();

function* getLists(action) {
  const listReponse = [];
  try {
    const list = yield call(firebase.getLists);
    list.forEach((doc) => {
      listReponse.push({ ...doc.data(), id: doc.id });
    });
    yield put(addFirebaseList(listReponse, action.listName));
  } catch (error) {
    console.error(error);
  }
}

function* createList(action) {
  try {
    const response = yield call(firebase.createList, action.list);
    yield put(addFirebaseListItem({ ...action.list, id: response.id }, action.listName));
  } catch (error) {
    console.error(error);
  }
}

function* deleteList(action) {
  try {
    yield call(firebase.deleteList, action.listID);
    yield put(deleteFirebaseList(action.listID, action.listName));
  } catch (error) {
    console.error(error);
  }
}

function* firebaseLists() {
  yield takeEvery(types.FIREBASE_LIST_FETCH, getLists);
  yield takeEvery(types.FIREBASE_LIST_ITEM_FETCH, createList);
  yield takeEvery(types.FIREBASE_LIST_DELETE_FETCH, deleteList);
}

export default firebaseLists;
