import * as actionTypes from "../../constants/ActionTypes";

const initialState = {
  loading: false,
  error: null,
  task: [
    {
      id: 1,
      taskName: "Backup DB",
      status: actionTypes.DRAFT,
    },
    {
      id: 2,
      taskName: "Run SQL",
      status: actionTypes.READY,
    },

  ],
};



export default (state = initialState, { payload, type }) => {
  switch (type) {
    case actionTypes.ADD_TASK: {
      return {
        ...state,
        task: [...state.task, payload],
        loading: false,
      };
    }
    case actionTypes.CHANGE_TASK_STATUS: {
      return {
        ...state,
        task: state.task.map(task => {
          if(task.id === payload.id) {
            return {
              ...task,
              status: payload.status,
            }
          }
          return task;
        })
      }
    }
    case actionTypes.UPDATE_TASK: {
      return {
        ...state,
        task: state.task.map(task => {
          if(task.id === payload.id){
            return {
              ...task,
              taskName: payload.taskName,
            }
          }
          return task;
        })
      }
     
    }
    default:
      return state;
  }
};
