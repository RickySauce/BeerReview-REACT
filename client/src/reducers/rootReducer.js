import { combineReducers } from "redux";
import userReducer from './userReducer'
import beersReducer from './beersReducer'

const rootReducer = combineReducers({
  user: userReducer,
  beers: beersReducer
})

export default rootReducer;
