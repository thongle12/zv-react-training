

import * as types from '../../constants/actionTypes'

const initialState = {
  users: [],
  loading: false,
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case types.GET_USERS_SUCCESS: {
      return {
        users: payload,
        loading: false,
      }
    }
    case types.GET_USERS_ERROR: {
      return {
        ...state,
        loading: true,
      }
    }
    default:
      return state;
  }
};
