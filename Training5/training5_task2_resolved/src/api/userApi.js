import axiosClient from "./axiosClient";

const userApi = {
  async login(data) {
    const url = "/login";
    return await axiosClient.post(url, data);
  },

  async getUsers() {
    const url='/api/users';
    return await axiosClient.get(url);
  },
};

export default userApi;
