import { put, takeLatest, all } from 'redux-saga/effects';

import { Types as movieActions } from "./MovieActions";

function* getAll(data) {  
    console.log(data);
    //yield put({ type: movieActions.LOGIN_FAILED, error: response })
}

function* ActionWatcher() {
  yield takeLatest(movieActions.GET_ALL, getAll)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}