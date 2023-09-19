import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setComponentLoaded } from "../../../Application/Redux/Reducers/ui";

export default function useMain() {
    const dispatch = useDispatch();
    useEffect(() => {
        document.fonts.ready.then(() => {
            setTimeout(() => {
                dispatch(setComponentLoaded("main"));
            }, "200");
        });
    }, []);
}
