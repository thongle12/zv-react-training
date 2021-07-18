import { combineReducers } from "redux";
import taskReducer from './task'
import networkState from './networkState'


const rootReducer = combineReducers({
  networkState,
  taskReducer,
});

export default rootReducer;
