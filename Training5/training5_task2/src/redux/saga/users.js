import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_USER,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USER_SUCCESS,
} from "../../constants/ActionTypes";
import { fetchUsers, fetchUser } from "../apiService/api";

function* getUsersSaga() {
  try {
    //call: gọi 1 function, nếu nó return về 1 promise, tạm dừng saga cho đến khi promise đc giải quyết
    const res = yield call(fetchUsers);
    yield put({
      type: GET_USERS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log("error saga ", error);
  }
}

function* getMyInfoUserSaga() {
  try {
    //gọi api
    const res = yield call(fetchUser);
    //gọi thành công thì put(dispatch) 1 action GET_USER_SUCCESS, khi đó reducer sẽ nhận 1 action tên là GET_USER_SUCCESS
    //action đc dispatch từ middleware ( ko phải từ user gửi lên)
    yield put({
      type: GET_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log("error saga ", error);
  }
}

//watcher, nhận công việc được giao sau đó chuyển cho worker
export default function* userSaga() {
  //mỗi lần user gửi action GET_USERS thì sẽ chạy hàm getUsersSaga
  yield takeLatest(GET_USERS, getUsersSaga);
  yield takeLatest(GET_USER, getMyInfoUserSaga);
}
