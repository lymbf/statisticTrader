import React from "react";
import "./loader.css";
import { createPortal } from "react-dom";

export default function Loader() {
    return createPortal(
        <div className="loader">
            <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>,
        document.getElementById("loader")
    );
}
