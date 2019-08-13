import { createReducer } from 'reduxsauce'

import { Types } from './MovieActions'

export const INITIAL_STATE = {
  movies: [],
  loading: false
}

const getAll = (states) => {
  return { ...states, loading: true }
}

const getAllSuccess = (states, { movies }) => {
  return { ...states, movies: movies }
}

export default createReducer(INITIAL_STATE, {
  [Types.GET_ALL_SUCCESS]: getAllSuccess,
  [Types.GET_ALL]: getAll,
})