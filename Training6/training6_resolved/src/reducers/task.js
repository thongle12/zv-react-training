
import * as types from '../constants'

const initialState = {
    loading: false,
    task: [
        {
            id: 1,
            name: "Write",
            status: types.DRAFT,
        },
        {
            id: 2,
            name: "Draw",
            status: types.SUCCESS,
        },
        {
            id: 3,
            name: "Walk",
            status: types.READY,
        },
        {
            id: 4,
            name: "Fly",
            status: types.READY,
        },
    ],
    error: null,
}

export default (state = initialState, {type, payload}) => {
    switch(type){
        case types.ADD_TASK: {
            return {
                ...state,
                task: [...state.task, payload],
            }
        }
        case types.CHANGE_TASK: {
            return {
                ...state,
                task: state.task.map( x => {
                    if(x.id === payload.id){
                        // x.status = payload.status;
                        return{
                            ...x,
                            name: payload.name,
                            status: payload.status,
                        }
                    }
                    return x;
                })
            }
        }
        default: return state;
    }
}

