import * as types from "../constants/ActionTypes";

const initialState = {
  logs: [],
  error: null,
  isFetching: false,
  isCreating: false,
  deleteInProgress: {
  },
  updateInProgress: {
  }
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_LOGS: {
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    }
    case types.GET_LOGS_SUCCESS: {
      return {
        ...state,
        logs: payload,
        isFetching: false,
      };
    }
    case types.GET_LOGS_FAIL: {
      return {
        ...state,
        error: payload,
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
        logs: [...state.logs, payload],
        isCreating: false,
      };
    }
    case types.ADD_LOG_ERROR: {
      return {
        ...state,
        error: payload,
        isCreating: false,
      };
    }
    //__________________________________
    case types.DELETE_LOG: {
      return {
        ...state,
        deleteInProgress:{
          [payload.id]: true,
        }
      };
    }
    case types.DELETE_LOG_SUCCESS: {
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== payload),
        deleteInProgress:{
          [payload]: false,
        }
      };
    }
    case types.DELETE_LOG_ERROR: {
      return {
        ...state,
        error: payload,
        deleteInProgress:{
          [payload]: false,
        }
      };
    }
    //__________________________________________
    case types.UPDATE_LOG: {
      return {
        ...state,
        updateInProgress:{
          [payload.id]: true,
        }
      };
    }
    case types.UPDATE_LOG_SUCCESS: {
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === payload.id ? payload : log,
        ),
        updateInProgress:{
          [payload.id]: false,
        }
      };
    }
    case types.UPDATE_LOG_ERROR: {
      return {
        ...state,
        error: payload,
        updateInProgress:{
          [payload.id]: false,
        }
      };
    }
    
    default:
      return state;
  }
};
