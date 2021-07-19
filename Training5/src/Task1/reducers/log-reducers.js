import * as types from "../constants/ActionTypes";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case types.GET_LOGS: {
      console.log('payload received from reducer', action.payload)
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    }
    // case types.GET_LOGS_FAIL: {
    //   return {
    //     ...state,
    //     logs: action.payload,
    //     loading: false,
    //   };
    // }
    // case types.GET_LOGS_SUCCESS: {
    //   return {
    //     ...state,
    //     logs: action.payload,
    //     loading: false,
    //   };
    // }

    // xử lí tạo mới data logs rồi đưa lên server
    case types.ADD_LOG: {
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    }
    case types.DELETE_LOG: {
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    }

    //Id của Current log
    case types.SET_CURRENT: {
      console.log('payload id current', action.payload)
      return {
        ...state,
        current: action.payload,
      };
    }
    case types.CLEAR_CURRENT: {
      return {
        ...state,
        current: null,
      };
    }

    case types.UPDATE_LOG: {
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      };
    }
    // search log
    case types.SEARCH_LOGS: {
      return {
        ...state,
        // logs: action.payload
        logs: state.logs.filter((log) => log.name.includes(action.payload)),
        loading: false
      };
    }
    case types.SET_LOADING: {
      return { 
        ...state, 
        loading: true 
      };
    }
    case types.LOGS_ERROR: {
      console.log(action.payload);
      console.log("payload", action.payload.statusText);
      return {
        ...state,
        error: action.payload.statusText,
      };
    }
    default:
      return state;
  }
};
