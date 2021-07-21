import { notification } from 'antd';
import axios from 'axios';
import {store} from '../redux/store'
import { createBrowserHistory } from 'history';

const axiosClient = axios.create({
  baseURL: 'http://localhost:9000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

//interceptors:
// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = store.getState().auth.token;
    config.headers.Authorization = "Bearer " + token;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (res) => {
    // Do something with response data
    return res;
  },
  (err) => {
    const history = createBrowserHistory();
    if (err.response.status === 403) {
      console.log('You dont have permission to do this')
      notification.open({
        message: "403",
        description: "You don't have permission to do this.",
      });
      history.push("/app");
    }
    return Promise.reject(err);
  }
);

export default axiosClient;
