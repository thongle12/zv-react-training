import axios from "axios";
import { store } from "../store";
import { createBrowserHistory } from "history";
import { notification } from "antd";
const API_ROOT = "http://localhost:9000/api";

export const fetchLoginApi = async (payload) => {
  //payload nhận vào từ SAGA là 1 object gồm email và password
  return await axios.post("http://localhost:9000/login", payload);
};

const instance = axios.create({
  baseURL: API_ROOT,
});

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = store.getState().authorization.token;
    config.headers.Authorization = "Bearer " + token;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    // Do something with response data
    return res;
  },
  (err) => {
    const history = createBrowserHistory();
    if (err.response.status === 401) {
      notification.open({
        message: "401",
        description: "You don't have permission to do this.",
      });
      history.push("/app");
    }
    return Promise.reject(err);
  }
);

export const fetchUsers = async () => {
  return await instance.get("/users");
};

export const fetchUser = async () => {
  return await instance.get("/users/my");
};
