const SET_DARK_MODE = 'config/setDarkMode';
const SET_CONFIG_VALS = 'config/setConfigVals';

export default (state = {darkMode: true}, action)=>{
    let data;
    switch(action.type){
        case SET_DARK_MODE:
            data = {...state};
            data.darkMode = action.payload;
            return {...data}
        case SET_CONFIG_VALS:
            data = {...state};
            for(const [key, val] of Object.entries(action.payload)){
                console.log('key: ', key, 'val: ', val)
                data[key] = val;
            };
            return {...data}
            
        default: return state;
    }
}

function setDarkMode(bool){
    console.log('setting mode, bool: ', bool)
    return{
        type: SET_DARK_MODE,
        payload: bool
    }
}

function setConfigVals(payload){
    return{
        type: SET_CONFIG_VALS,
        payload: payload
    }
}

export {setDarkMode, setConfigVals}