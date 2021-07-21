
import * as types  from '../constants/actionTypes'

export const login = (loginInfor) => {
    return {
        type: types.LOGIN,
        payload: loginInfor,
    }
}

export const loginSuccess = (token) => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: token,
    }

}

export const loginError = (error) => {
    return {
        type: types.LOGIN_ERROR,
        payload: error,
    }

}