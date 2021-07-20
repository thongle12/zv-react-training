import * as actionTypes from '../../constants/ActionTypes'

const initialState = {
    loading: false,
    token: null,
    error: null,
}

export default (state = initialState, {payload, type}) => {
    switch (type) {
        case actionTypes.GET_TOKEN: {
            return {
                ...state,
                loading: true,
            }
        }
        case actionTypes.GET_TOKEN_SUCCESS: {
            return {
                ...state,
                loading: false,
                token: payload.token,
                error: payload.error,
            }
        }
        default:
            return state;
    }
}