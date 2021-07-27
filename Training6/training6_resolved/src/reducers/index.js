import { combineReducers } from 'redux';
import taskReducer from './task'
import networkReducer from './network'
const rootReducer = combineReducers({
    taskReducer,
    networkReducer,
});

export default rootReducer;
