import React, { useRef } from "react";
import "./colorModeSwitcher.css";
import useColorModeSwitcher from "./UIControllers/colorModeSwitcher";

export default function ColorModeSwitcher() {
    const ref = useRef(null);
    const { switchToDark, switchToLight, darkMode} =
        useColorModeSwitcher(ref);
    return (
        <div className = 'cmsc'>
            <div  className="c-m-switcher">
                <div
                    className={`c-m-mode hov ${darkMode ? 'active' : 'inactive'}`}
                    onClick={switchToDark}
                >
                    <span className="material-symbols-outlined">dark_mode</span>
                    <div>dark</div>
                </div>
                <div ref={ref} className="c-m-active"></div>
                <div
                    className={`c-m-mode hov ${!darkMode ? 'active' : 'inactive'}`}
                    onClick={switchToLight}
                >
                    <div>light</div>
                    <span className="material-symbols-outlined">
                        light_mode
                    </span>
                </div>
            </div>
        </div>
    );
}
