


import * as types from '../constants/actionTypes'
export const getUsers = () => {
    return ({
        type: types.GET_USERS,
    })
}
export const getUsersSuccess = (data) => {
    return ({
        type: types.GET_USERS_SUCCESS,
        payload: data,
    })
}
export const getUsersError = (error) => {
    return ({
        type: types.GET_USERS_ERROR,
        payload: error,
    })
}