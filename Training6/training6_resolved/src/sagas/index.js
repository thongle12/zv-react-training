import { eventChannel } from "redux-saga";
import {
  all,
  call,
  delay,
  put,
  select,
  take,
  takeEvery,
} from "redux-saga/effects";
import { changeNetworkStatus, changeTask } from "../action";
import * as types from "../constants";
import { getStatusNetwork } from "../reducers/getSelector";

function checkNetwork() {
  return eventChannel((emitter) => {
    const updateOfflineNetwork = (e) => {
      return emitter({
        type: types.LISTEN_NETWORK,
        payload: window.navigator.onLine,
      });
    };
    const updateOnlineNetwork = (e) => {
      return emitter({
        type: types.LISTEN_NETWORK,
        payload: window.navigator.onLine,
      });
    };
    window.addEventListener("offline", updateOfflineNetwork);
    window.addEventListener("online", updateOnlineNetwork);
    return () => {
      window.removeEventListener("offline", updateOfflineNetwork);
      window.removeEventListener("online", updateOnlineNetwork);
    };
  });
}

function* networkStatusWatcher() {
  const chan = yield call(checkNetwork);
  while (true) {
    let action = yield take(chan);
    yield put(changeNetworkStatus(action.payload));
  }
}

function* handleChangeTask({ payload }) {
  const networkStatus = yield select(getStatusNetwork);
  if (networkStatus) {
    if (payload.status === types.READY) {
      return yield put(
        changeTask({
          id: payload.id,
          name: payload.name,
          status: types.SUBMITTING,
        })
      );
    } else if (payload.status === types.SUBMITTING) {
      const randomFlag = Math.random() > 0.5 ? true : false;
      yield delay(2000);
      if (randomFlag) {
        return yield put(
          changeTask({
            id: payload.id,
            name: payload.name,
            status: types.SUCCESS,
          })
        );
      } else {
        return yield put(
          changeTask({
            id: payload.id,
            name: payload.name,
            status: types.ERROR,
          })
        );
      }
    }
  }
}

function* changeTaskWatcher() {
  yield takeEvery(types.CHANGE_TASK, handleChangeTask);
}

function* rootSaga() {
  yield all([changeTaskWatcher(), networkStatusWatcher()]);
}

export default rootSaga;
