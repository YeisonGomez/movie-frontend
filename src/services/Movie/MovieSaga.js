import { put, takeLatest, all } from 'redux-saga/effects';

import { Types as movieActions } from "./MovieActions";
import Api from '../../common/Api/Api';

function* getAll(data) {  
  const response = yield Api.get('/movie/all')
    .catch(error => error );
  
  if(response.ok){
    yield put({ type: movieActions.GET_ALL_SUCCESS, movies: response.payload })
  } else {
    yield put({ type: movieActions.GET_ALL_FAILED, error: response.payload })
  }
}

function* ActionWatcher() {
  yield takeLatest(movieActions.GET_ALL, getAll)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}