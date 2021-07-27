import * as types from '../constants'


const initialState = {
    network: window.navigator.onLine,
}

export default (state = initialState, {type, payload}) => {
    switch(type){
        case types.LISTEN_NETWORK: {
            return state;
        }
        case types.CHANGE_NETWORK: {
            return {
                ...state,
                network: payload,
            }
        }
        default: return state;
    }
}