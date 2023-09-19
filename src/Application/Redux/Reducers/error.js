const SET_MAIN_ERROR = 'error/setMainError';

export default (state = {main: false}, action)=>{
    let data = {...state}
    switch(action.type){
        case SET_MAIN_ERROR:
            data = {...state}
            data.main = action.payload;
            return {...data}
        default: return state;
    }
}

const setMainError = (payload)=>{
    return{
        type: SET_MAIN_ERROR,
        payload: payload
    }
}
export {setMainError}