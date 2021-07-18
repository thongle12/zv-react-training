import * as actionTypes from "../../constants/ActionTypes";

const initialState = {
  status: window.navigator.onLine,
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case actionTypes.LISTEN_NETWORK_STATUS: {
      return payload;
    }
    case actionTypes.CHANGE_NETWORK_STATUS: {
      return { 
        ...state, 
        status: payload 
      };
    }
    default:
      return state;
  }
};
