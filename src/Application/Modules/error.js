import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useError() {
    const mainError = useSelector(state=>state.error.main)
    const navigate = useNavigate()

    useEffect(()=>{
        mainError && navigate('/error');
    },[mainError])
}
