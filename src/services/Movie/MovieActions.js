import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  getAll: [],
  getAllSuccess: [],

  getSingle: ['id']
})

export default Creators