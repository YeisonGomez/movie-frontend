import { createReducer } from 'reduxsauce'

import { Types as movieActions } from './MovieActions'

export const INITIAL_STATE = {
  movies: []
}

const getAllSuccess = (states, { movies }) => {
  return { ...states, movies }
}

export default createReducer(INITIAL_STATE, {
  [movieActions.GET_ALL_SUCCESS]: getAllSuccess
})