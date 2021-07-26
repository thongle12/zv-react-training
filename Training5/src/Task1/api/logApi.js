import axiosClient from "./axiosClient";

import {
  fetchLog,
  fetchLogSuccess,
  fetchLogError,
  addLog, 
  addLogSuccess,
  addLogError,
  deleteLog,
  deleteLogSuccess,
  deleteLogError,
  updateLog,
  updateLogSuccess,
  updateLogError,
} from "../actions/toDoApi";

const url = '/todos';

export const getLogs = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchLog());
      const res = await axiosClient.get(url);
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
      dispatch(addLog());
      const res = await axiosClient.post(url, log);
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
      dispatch(deleteLog(id));
      const urlDelete = `/todos/${id}`;
      await axiosClient.delete(urlDelete);
      dispatch(deleteLogSuccess(id));
    } catch (err) {
      dispatch(deleteLogError(err.response));
    }
  };
};

export const updateLogs = (log) => {
  return async (dispatch) => {
    try {
      dispatch(updateLog(log.id));
      const urlUpdate = `/todos/${log.id}`;
      const res = await axiosClient.put(urlUpdate, log);
      const data = await res.data;
      dispatch(updateLogSuccess(data));
    } catch (err) {
      dispatch(updateLogError(err.response));
    }
  };
};
