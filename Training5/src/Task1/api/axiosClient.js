import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:9000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

//interceptors:
// Add a request interceptor
axiosClient.interceptors.request.use(
    // Do something before request is sent
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    // Do something with response data
   
);

export default axiosClient;
