import React, { useRef } from "react";
import "./user.css";
import { useDispatch, useSelector } from "react-redux";
import {
    foldLeftMenu,
    unFoldLeftMenu,
} from "../../Application/Redux/Reducers/ui";
import useUser from "./UIController/user";

export default function User() {
    const arrowRef = useRef(null);
    const nameRef = useRef(null);
    const userRef = useRef(null);
    const dispatch = useDispatch();
    const folded = useSelector((state) => state.ui.leftMenu.folded);
    const user = useSelector((state) => state.auth.user);

    useUser(arrowRef, nameRef, userRef);
    return (
        <div className="l-m-user">
            <div ref = {userRef}>
                <div className="avatar">
                    <span class="material-symbols-outlined">
                        account_circle
                    </span>
                </div>
                <div ref = {nameRef}className="user-name">{user && user.name}</div>
            </div>
            <div
                className="hov"
                onClick={() => {
                    dispatch(!folded ? foldLeftMenu() : unFoldLeftMenu());
                }}
            >
                <span
                    ref={arrowRef}
                    class="material-symbols-outlined"
                    style={{ userSelect: "none" }}
                >
                    keyboard_arrow_left
                </span>
            </div>
        </div>
    );
}
