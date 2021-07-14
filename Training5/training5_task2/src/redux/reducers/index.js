import { combineReducers } from "redux";
import authorization from "./authorization";
import users from "./users";
import myInfo from "./myInfo";

const rootReducer = combineReducers({
  authorization,
  users,
  myInfo,
});

export default rootReducer;
