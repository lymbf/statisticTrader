import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setComponentLoaded } from "../../../Application/Redux/Reducers/ui";

export default function useHeader() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setComponentLoaded("header"));
    }, []);
}
