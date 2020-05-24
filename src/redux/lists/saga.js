import { call, put, takeLatest } from 'redux-saga/effects';
import { addList } from 'redux/lists/actions';

import TrendingService from 'services/api/TrendingService';
import * as types from './types';
import { addAsync, deleteAsync } from '../app/actions';

function* fetchTrending() {
  try {
    yield put(addAsync());
    const response = yield call([TrendingService, TrendingService.list]);
    yield put(addList(response, 'trendingList'));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(deleteAsync());
  }
}

function* listsSaga() {
  yield takeLatest(types.FETCH_TRENDING, fetchTrending);
}

export default listsSaga;
