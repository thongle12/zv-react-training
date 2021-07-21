

import * as types from '../../constants/actionTypes'

const initialState = {
  error: "",
  token: "",
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        token: payload.token,
      }
    }
    case types.LOGIN_ERROR: {
      return {
        ...state,
        error: payload,
      }
    }
    default:
      return state;
  }
};
