
import * as types from '../constants/index'



export const addNewTask = (task) => {
    return {
        type: types.ADD_TASK,
        payload: task,
    }
}

export const changeTask = (task) => {
    console.log(task)
    return {
        type: types.CHANGE_TASK,
        payload: task,
    }
}

export const changeNetworkStatus = (payload) => {
    return {
        type: types.CHANGE_NETWORK,
        payload,
    }
}




