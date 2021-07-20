import * as actionTypes from "../constants/ActionTypes";

export function getToken(payload) {
    return {
      type: actionTypes.GET_TOKEN,
      payload,
    };
  }
  
  export function getTokenSuccess(payload) { //payload la gia tri token truyen vao
    console.log('payload sign out', payload)
    return {
      type: actionTypes.GET_TOKEN_SUCCESS,
      payload,
    };
  }
  
