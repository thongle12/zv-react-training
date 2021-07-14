import * as actionTypes from '../../constants/ActionTypes'


const initialState = {
    user: null,
    error: null,
    loading: false,
}


export default (state = initialState, {payload, type}) => {
    switch (type) {
        case actionTypes.GET_USER: {
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.GET_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: payload,
                error: payload.error,
            }
        }
        default:
            return state;
    }
}

