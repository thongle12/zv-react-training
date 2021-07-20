import axios from "axios";

import {
  fetchLogSuccess,
  fetchLogError,
  addLogSuccess,
  addLogError,
  deleteLogSuccess,
  deleteLogError,
  updateLogSuccess,
  updateLogError,
} from "../actions/toDoApi";

const api = "http://localhost:9000/";

export const getLogs = () => {
  return async (dispatch) => {
    try {
      // const res = await fetch(api + "todos");
      // const data = await res.json();
      const res = await axios.get(api + "todos");
      const data = await res.data;
      dispatch(fetchLogSuccess(data));
    } catch (err) {
      dispatch(fetchLogError(err.response));
    }
  };
};



export const addLogs = (log) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(api + "todos", log);
      const data = await res.data;
      dispatch(addLogSuccess(data));
    } catch (err) {
      dispatch(addLogError(err.response));
    }
  };
};


export const deleteLogs = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(api + `todos/${id}`);
      dispatch(deleteLogSuccess(id));
    } catch (err) {
      dispatch(deleteLogError(err.response));
    }
  };
};

export const updateLogs = (log) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(api + `todos/${log.id}`, log);
      const data = await res.data;
      dispatch(updateLogSuccess(data));
    } catch (err) {
      dispatch(updateLogError(err.response));
    }
  };
};
