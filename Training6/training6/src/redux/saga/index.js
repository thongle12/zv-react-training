import { all, call, put, select, take, takeLatest } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { changeNetworkStatus } from "../../action/network";

import * as actionTypes from "../../constants/ActionTypes";
import { changeStatusTask } from "../../action/task";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));


const checkNetworkStatus = () => {
  return eventChannel((emitter) => {
    const updateOfflineNetwork = (e) => {
      console.log("Offline");
      return emitter({
        type: actionTypes.LISTEN_NETWORK_STATUS,
        payload: window.navigator.onLine,
      });
    };

    const updateOnlineNetwork = (e) => {
      console.log("Online");
      return emitter({
        type: actionTypes.LISTEN_NETWORK_STATUS,
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
};

function* watchNetworkStatus() {
  const chan = yield call(checkNetworkStatus);

  while (true) {
    const action = yield take(chan);
    yield put(changeNetworkStatus(action.payload));
  }
}

function* handleReady(action) {
  const networkStatus = yield select((state) => state.networkState.status);
  if (networkStatus) {
    //online và task ready => automically SUBMMITITNG
    return yield put(
      changeStatusTask({
        id: action.payload.id,
        status: actionTypes.SUBMITTING,
      })
    );
  }
}

function* handleSubmiting(action) {
  //50% success or error
  const random = Math.floor(Math.random() * 2);
  yield delay(1000);

  if (random === 1) {
    return yield put(
      changeStatusTask({
        status: actionTypes.SUCCESS,
        id: action.payload.id,
      })
    );
  }
  yield put(
    changeStatusTask({
      status: actionTypes.ERROR,
      id: action.payload.id,
    })
  );
}

function* checkAllReadyTasks(action) {
  if (action.payload) {
    console.log("test chack all ready task");

    const readyTasks = yield select((state) =>
      state.taskReducer.task.filter((task) => task.status === actionTypes.READY)
    );
    console.log("readyTasks", readyTasks);
    for (let i = 0; i < readyTasks.length; i++) {
      yield put(
        changeStatusTask({
          id: readyTasks[i].id,
          status: actionTypes.SUBMITTING,
        })
      );
    }
  }
}

//ROOT SAGA

export default function* rootSaga() {
  yield all([
    yield takeLatest(
      //BLOCKING
      (action) =>
        action.type === actionTypes.CHANGE_TASK_STATUS &&
        action.payload.status === actionTypes.READY,
      handleReady
    ),
    yield takeLatest(
      //BLOCKING
      (action) =>
        action.type === actionTypes.CHANGE_TASK_STATUS &&
        action.payload.status === actionTypes.SUBMITTING,
      handleSubmiting
    ),
    yield takeLatest("CHANGE_NETWORK_STATUS", checkAllReadyTasks),

    watchNetworkStatus(),
  ]); //all là non-blocking
}
