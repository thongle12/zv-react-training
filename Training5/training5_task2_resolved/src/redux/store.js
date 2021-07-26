import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddle from "redux-saga";
import rootReducer from "./reducers";

import rootSaga from "../saga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddle();
// mount it on the Store

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
const persistor = persistStore(store);

// then run the saga
sagaMiddleware.run(rootSaga);

// render the application
export { store, persistor };

