import { combineReducers } from 'redux'

import reducerMovie from '../services/Movie/MovieReducer'

const appReducer = combineReducers({
  movie: reducerMovie
});

export default appReducer;
