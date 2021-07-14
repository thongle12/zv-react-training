import * as actionTypes from '../../constants/ActionTypes'


const initialState = {
    users: null,
    error: null,
    loading: false,
}


export default (state = initialState, {payload, type}) => {
    switch (type) {
        case actionTypes.GET_USERS: {
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.GET_USERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                users: payload.users,
                error: payload.error,
            }
        }
        default:
            return state;
    }
}

