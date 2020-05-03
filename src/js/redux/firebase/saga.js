import { call, put, takeEvery } from 'redux-saga/effects';
import Firebase from 'config/firebase';
import { setAddList, setCreateList, setDeleteList, setEditList } from './actions';
import * as types from './types';

const firebase = new Firebase();

function* getLists(action) {
  const listReponse = [];
  try {
    const list = yield call(firebase.getLists);
    list.forEach((doc) => {
      listReponse.push({ ...doc.data(), id: doc.id });
    });
    yield put(setAddList(listReponse, action.listName));
  } catch (error) {
    console.error(error);
  }
}

function* createList(action) {
  const { list, listName } = action;
  try {
    const response = yield call(firebase.createList, list);
    yield put(setCreateList({ ...list, id: response.id }, listName));
  } catch (error) {
    console.error(error);
  }
}

function* deleteList(action) {
  const { listID, listName } = action;
  try {
    yield call(firebase.deleteList, listID);
    yield put(setDeleteList(listID, listName));
  } catch (error) {
    console.error(error);
  }
}

function* editList(action) {
  const { list, listID, listName } = action;
  try {
    yield call(firebase.editList, list, listID);
    yield put(setEditList(list, listID, listName));
  } catch (error) {
    console.error(error);
  }
}

function* firebaseLists() {
  yield takeEvery(types.FETCH_GET_LISTS, getLists);
  yield takeEvery(types.FETCH_CREATE_LIST, createList);
  yield takeEvery(types.FETCH_DELETE_LIST, deleteList);
  yield takeEvery(types.FETCH_EDIT_LIST, editList);
}

export default firebaseLists;
