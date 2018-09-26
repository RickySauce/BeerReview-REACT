import { combineReducers } from "redux";
import userReducer from './userReducer'
import beersReducer from './beersReducer'
import reviewReducer from './reviewReducer'

const rootReducer = combineReducers({
  user: userReducer,
  beers: beersReducer,
  review: reviewReducer
})

export default rootReducer;
