import React, { useRef } from "react";
import "./index.css";
import useLeftMenu from "./UIController/leftMenu";
import { useSelector } from "react-redux";
import User from "./user";
import Navigation from "./navigation";

export default function LeftMenu() {
    const ref = useRef(null);
    useLeftMenu(ref);

    const loggedIn = useSelector((state) => state.auth.loggedIn);
    return (
        <div className="left-menu" ref={ref}>
            {loggedIn && <User />}
            <Navigation />
        </div>
    );
}
