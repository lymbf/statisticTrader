import { useDispatch } from "react-redux";
import { setLoaded, setLoading } from "../Redux/Reducers/actions";


export default function useFetch() {
    const dispatch = useDispatch();
    const getData = async (url, method, body)=>{
        dispatch(setLoading());
        let token = localStorage.getItem('auth_token');
        console.log('pre: ', process.env.REACT_APP_BASE_URL)
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}/${url}`, {
            method: method || 'GET',
            body: body || null,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        res = await res.json();
        setTimeout(()=>{
            dispatch(setLoaded())
        },50)
       
        return res;
    }
    return {getData};
}
