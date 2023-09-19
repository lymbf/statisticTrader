const SET_LOADING = 'actions/setLoading';
const SET_LOADED = 'actions/setLoaded';

export default (state = {loading: false}, action)=>{
    let data = {...state};
    switch(action.type){
        case SET_LOADING:
            data.loading = true;
            return {...data};
        case SET_LOADED:
            data.loading = false;
            return {...data};
        default: return state;
    }
}

const setLoading = ()=>{
    return {type: SET_LOADING};
}

const setLoaded = ()=>{
    return { type: SET_LOADED}
}

export {setLoading, setLoaded}