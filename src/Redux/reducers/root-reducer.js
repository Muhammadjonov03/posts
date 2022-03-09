import { combineReducers } from "redux";
import { usersReducer } from ".";

const rootReducer = combineReducers({
  users: usersReducer
})

export default rootReducer