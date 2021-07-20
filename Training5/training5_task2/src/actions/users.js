import * as actionTypes from "../constants/ActionTypes";

export const getUsers = (payload) => {
  return {
    type: actionTypes.GET_USERS,
    payload,
  };
};

export const getUsersSuccess = (payload) => {
    return {
      type: actionTypes.GET_USERS_SUCCESS,
      payload,
    };
  };


export const getUsersError = (payload) => {
  return {
    type: actionTypes.ERROR,
    payload,
  };
};
//info
export const getMyInfo = (payload) => {
    return {
      type: actionTypes.GET_USER,
      payload,
    };
  };  
  export const getMyInfoSuccess = (payload) => {
    return {
      type: actionTypes.ERROR,
      payload,
    };
  };
  
  export const getMyInfoError = (payload) => {
    return {
      type: actionTypes.ERROR,
      payload,
    };
  };
  