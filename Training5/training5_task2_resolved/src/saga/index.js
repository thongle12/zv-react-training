import {
  all,
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { STATUS_CODE } from "../constants";
import * as types from "../constants/actionTypes";
import userApi from "../api/userApi";

import { loginSuccess, loginError } from "../action/login";
import { getUsersSuccess, getUsersError } from "../action/users";
import { notification } from "antd";

function* handleLogin({ payload }) {
  yield delay(1000);
  const response = yield call(userApi.login, payload);
  if (response.error) {
    yield put(loginError(response.error));
  } else yield put(loginSuccess(response.data));
}

function* watchFetchListUsers() {
  const response = yield call(userApi.getUsers);
  const { data, status } = response;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(getUsersSuccess(data.users));
  } else {
    yield put(getUsersError(data));
  }
}

//_________________________________________________
function* login() {
  yield takeLatest(types.LOGIN, handleLogin);
}

function* getUsers() {
  yield takeLatest(types.GET_USERS, watchFetchListUsers);
}

function* rootSaga() {
  yield all([login(), getUsers()]);
  // yield takeLatest(types.LOGIN, handleLogin);
  // yield takeLatest(types.GET_USERS, watchFetchListUsers);
  // yield fork(watchFetchListUsers);
}

export default rootSaga;
