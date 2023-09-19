import React from "react";
import "./index.css";
import Logo from "./logo";
import ColorModeSwitcher from "./colorModeSwitcher";
import useHeader from "./UIControllers/header";

export default function Header() {
  useHeader();
    return (
        <header>
            <Logo />
            <ColorModeSwitcher />
        </header>
    );
}
