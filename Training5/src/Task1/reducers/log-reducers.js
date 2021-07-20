import * as types from "../constants/ActionTypes";

const initialState = {
  logs: null,
  error: null,
  isFetching: false,
  isCreating: false,
  isUpdating: false,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case types.GET_LOGS: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.GET_LOGS_SUCCESS: {
      return {
        ...state,
        logs: action.payload,
        isFetching: false,
      };
    }
    case types.GET_LOGS_FAIL: {
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    }

    //____________________________
   
    case types.ADD_LOG: {
      return {
        ...state,
        isCreating: true,
      };
    }
    case types.ADD_LOG_SUCCESS: {
      return {
        ...state,
        logs: [...state.logs, action.payload],
        isCreating: false,
      };
    }
    case types.ADD_LOG_ERROR: {
      return {
        ...state,
        error: action.payload,
        isCreating: false,
      };
    }
    //__________________________________
    case types.DELETE_LOG: {
      return {
        ...state,
      };
    }
    case types.DELETE_LOG_SUCCESS: {
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    }
    case types.DELETE_LOG_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    //__________________________________________
    case types.UPDATE_LOG: {
      return {
        ...state,
        isUpdating: true,
      };
    }
    case types.UPDATE_LOG_SUCCESS: {
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log,
        ),
        isUpdating: false,
      };
    }
    case types.UPDATE_LOG_ERROR: {
      return {
        ...state,
        error: action.payload,
        isUpdating: false,
      };
    }
    
    default:
      return state;
  }
};
