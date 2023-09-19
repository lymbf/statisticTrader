import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import useFetch from "../Hooks/fetch";
import { login, setLoggingIn} from "../Redux/Reducers/auth";
import jwt from 'jwt-decode';
import { setConfigVals } from "../Redux/Reducers/config";

export default function useAuth() {
  
    localStorage.removeItem('auth_token');
    localStorage.setItem(
        "auth_token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg5ODgwNTc4LCJleHAiOjE2OTI0NzI1Nzh9.6o6X8_Lol1GlHslmPjSCR3XQRaM537YYNCvqVGm0ydM"
    );

    const { getData } = useFetch();
    const dispatch = useDispatch();
    const user = useSelector(state=>state.auth.user)

    // initiate if session token exists
    useEffect(()=>{
        if (localStorage.getItem("auth_token")) {
            let {id, exp} = jwt(localStorage.getItem("auth_token"));
    
            //check for token expiration
            if(exp*1000 > new Date().getTime()){
                dispatch(setLoggingIn());
                getData(`users/${id}?populate[config]=*`).then((res) => {
                    console.log("res: ", res);
                    dispatch(login({id: res.id, name: res.username }));
                    dispatch(setConfigVals({darkMode: res.config.dark_mode}));
                });
            }
        
        }
    },[])

    useEffect(()=>{
            console.log('user: ', user.name ||'no username')
    },[user])

}
