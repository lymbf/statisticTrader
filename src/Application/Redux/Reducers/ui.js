const FOLD_LEFT_MENU = "ui/foldLeftMenu";
const UNFOLD_LEFT_MENU = "ui/unfoldLeftMenu";
const SET_COMPONENT_LOADED = 'ui/setComponentLoaded';

export default (
    state = {
        page: { loaded: false },
        leftMenu: { loaded: false, folded: true },
        rightMenu: {loaded: false},
        header: {loaded: false},
        main: {loaded: false}
    },
    action
) => {
    let data = { ...state };
    switch (action.type) {
        case FOLD_LEFT_MENU:
            data.leftMenu.folded = true;
            return { ...data };
        case UNFOLD_LEFT_MENU:
            data.leftMenu.folded = false;
            return { ...data };
        case SET_COMPONENT_LOADED:
            data[action.payload].loaded = true;
            data.page.loaded = true;
            for(const [key, val] of Object.entries(data)){
                if(key!='page'){
                    if(!val.loaded) data.page.loaded = false;
                }
            }
            return {...data}
        default:
            return state;
    }
};

const foldLeftMenu = () => {
    return { type: FOLD_LEFT_MENU };
};

const unFoldLeftMenu = () => {
    return { type: UNFOLD_LEFT_MENU };
};

const setComponentLoaded = (payload)=>{
    return{
        type: SET_COMPONENT_LOADED,
        payload: payload
    }
}

export { foldLeftMenu, unFoldLeftMenu, setComponentLoaded };
