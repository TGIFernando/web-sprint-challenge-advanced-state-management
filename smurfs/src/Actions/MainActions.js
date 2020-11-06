import axios from 'axios'
export const IS_LOADING = 'IS_LOADING'
export const ERROR = 'ERROR'
export const LOADED = 'LOADED'
export const POSTED = 'POSTED'
export const POSTFAIL = 'POSTFAIL'
export const RESET = 'RESET'

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: IS_LOADING})
    axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log(res.data)
            dispatch({type: LOADED})
        }) .catch(err => {
            console.log(err)
            dispatch({type: ERROR})
        })
}

export const addSmurf = (smurf) => (dispatch) => {
    dispatch({type: IS_LOADING})
    axios.post(`http://localhost:3333/smurfs`, smurf)
        .then(res => {
            console.log(res.data)
            dispatch({type: POSTED, payload:res.data})
        }).catch(err => {
            console.log(err)
            dispatch({type: POSTFAIL})
        })
}

export const reset = {
    type:RESET
}