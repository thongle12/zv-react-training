import * as types from "../constants/ActionTypes";


export const fetchLog = (data) => {
  return {
    type: types.GET_LOGS,
    payload: data,
  };
};
export const fetchLogSuccess = (data) => {
  return {
    type: types.GET_LOGS_SUCCESS,
    payload: data,
  };
};

export const fetchLogError = (error) => {
  return {
    type: types.GET_LOGS_FAIL,
    payload: error,
  };
};

//___________________________________________

export const addLogSuccess = (data) => {
  return {
    type: types.ADD_LOG_SUCCESS,
    payload: data,
  };
};

export const addLogError = (error) => {
  return {
    type: types.ADD_LOG_ERROR,
    payload: error,
  };
};

//___________________________________________
export const deleteLog = (id) => {
  return {
    type: types.DELETE_LOG,
    payload: {
      id,
    },
  };
};

export const deleteLogSuccess = (data) => {
  return {
    type: types.DELETE_LOG_SUCCESS,
    payload: data,
  };
};

export const deleteLogError = (error) => {
  return {
    type: types.DELETE_LOG_ERROR,
    payload: error,
  };
};
//___________________________________________
export const updateLog = (log) => {
  return {
    type: types.UPDATE_LOG,
    payload: log,
  };
};

export const updateLogSuccess = (data) => {
  return {
    type: types.UPDATE_LOG_SUCCESS,
    payload: data,
  };
};

export const updateLogError = (error) => {
  return {
    type: types.UPDATE_LOG_ERROR,
    payload: error,
  };
};
