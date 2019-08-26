import { fork, all } from 'redux-saga/effects';

import MovieSaga from '../services/Movie/MovieSaga';

export default function* rootSaga () {
    yield all([
        fork(MovieSaga)
    ]);
}