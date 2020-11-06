const initailState = [
    {
        name: 'example smurf',
        age: 200,
        height: '5cm',
        id:0
    },
]

export const mainReducer = (state=initailState, action) => {
    switch(action.type){
        default:
            return state
    }
}