import * as actionTypes from '../constants/ActionTypes'

export const addTask = (payload) => {
    return {
        type: actionTypes.ADD_TASK,
        payload,
    } 
}

export const changeStatusTask = ({id, status}) => {
    //payload là 1 object ID và STATUS
    return {
        type: actionTypes.CHANGE_TASK_STATUS,
        payload: {id, status}
    }
}

export const updateTask = ({id, taskName}) => {
    return {
        type: actionTypes.UPDATE_TASK,
        payload: {id,taskName},
    }
}


