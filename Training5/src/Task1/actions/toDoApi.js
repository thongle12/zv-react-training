import * as types from "../constants/ActionTypes";


export const fetchLog = () => {
  return {
    type: types.GET_LOGS,
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
export const addLog = () => {
  return {
    type: types.ADD_LOG,
  };
};

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

export const deleteLogSuccess = (id) => {
  return {
    type: types.DELETE_LOG_SUCCESS,
    payload: id,
  };
};

export const deleteLogError = (error) => {
  return {
    type: types.DELETE_LOG_ERROR,
    payload: error,
  };
};
//___________________________________________
export const updateLog = (id) => {
  return {
    type: types.UPDATE_LOG,
    payload: {
      id,
    },
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
