const SET_LOGGED_IN = "auth/setLoggedIn";
const SET_USER = "auth/setUser";
const LOGOUT = "auth/logout";
const LOGIN = "auth/login";
const LOGGING_IN = "auth/loggingIn";

export default function (
    state = { loggedIn: false, loggingIn: false, user: {} },
    action
) {
    let data;
    switch (action.type) {
        case SET_LOGGED_IN:
            data = { ...state };
            data.loggedIn = action.payload;
            data.loggingIn = false;
            return { ...data };
        case SET_USER:
            data = { ...state };
            data.user = { ...action.payload };
            return { ...data };
        case LOGOUT:
            data = { ...state };
            data.user = {};
            data.loggedIn = false;
            return { ...data };
        case LOGIN:
            data = { ...state };
            data.user = { ...action.payload };
            data.loggedIn = true;
            data.loggingIn = false;
            return { ...data };
        case LOGGING_IN:
            data = {...state};
            data.loggingIn = true;
            return {...data}
        default:
            return state;
    }
}

const setLoggedIn = (payload) => {
    return { type: SET_LOGGED_IN, payload: payload };
};

const setUser = (payload) => {
    return {
        type: SET_USER,
        payload: { id: payload.id, name: payload.name },
    };
};

const logout = () => {
    return { type: LOGOUT };
};

const login = (payload) => {
    return {
        type: LOGIN,
        payload: { id: payload.id, name: payload.name },
    };
};

const setLoggingIn = () => {
    return { type: LOGGING_IN };
};

export { login, logout, setLoggedIn, setUser, setLoggingIn };
