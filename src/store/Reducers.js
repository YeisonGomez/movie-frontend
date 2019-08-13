import { combineReducers } from 'redux'

import reducerMovie from '../services/Movie/MovieReducer'

const appReducer = combineReducers({
  movie: reducerMovie
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
