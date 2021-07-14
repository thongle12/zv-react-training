import * as actionTypes from "../../constants/ActionTypes";

export const getUser = (payload) => {
    return {
      type: actionTypes.GET_USER,
      payload,
    };
  };
  
  export const getUserError = (payload) => {
    return {
      type: actionTypes.ERROR,
      payload,
    };
  };