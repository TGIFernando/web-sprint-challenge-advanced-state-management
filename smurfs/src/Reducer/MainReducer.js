import { IS_LOADING, POSTED } from '../Actions/MainActions'

const initailState = {
    smurfs: [],
    isLoading: false,
    error: '',
}

export const mainReducer = (state=initailState, action) => {
    switch(action.type){
        case POSTED:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isLoading: false
            }
        default:
            return state
    }
}