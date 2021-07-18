import * as actionTypes from '../constants/ActionTypes'

export const changeNetworkStatus = (payload) => {
    return {
        type: actionTypes.CHANGE_NETWORK_STATUS,
        payload,
    } 
}