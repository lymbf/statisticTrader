import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "./Redux/Reducers/config";
import { useEffect } from "react";
import { gsap } from "gsap";
import useAuth from "./Modules/auth";
import useError from "./Modules/error";

export default function useInit() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.config.darkMode);
    const pageLoaded = useSelector((state) => state.ui.page.loaded);

    //initialize authentication
    useAuth();
    // initialize config
    useEffect(() => {
        dispatch(setDarkMode(true));
    }, []);

    //update color mode on mode change
    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("color-mode", "dark");
        } else {
            document.documentElement.setAttribute("color-mode", "light");
        }
    }, [darkMode]);

    //initialize error handler
    useError();

    //remove loading cover after DOM render
    useEffect(() => {
        if (pageLoaded) {
            // document.getElementById("initLoader").classList.add("hide");
            gsap.to( document.getElementById("initLoader"), {
                autoAlpha:0,
                duration: 0.01
            })
        }
    }, [pageLoaded]);
}
