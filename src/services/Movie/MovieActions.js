import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  getAll: ['id'],
  getAllSuccess: ['movies'],
  getAllFailed: ['error'],

  getSingleMovie: ['id'],
  getSingleMovieSuccess: ['movie'],
  getSingleMovieFailed: [],
})

export default Creators