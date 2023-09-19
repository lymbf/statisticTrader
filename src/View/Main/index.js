import React from "react";
import "./index.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import useInit from "../../Application/init";
import useMainController from "../../Application/Controller/mainController";

import Header from "../Header";
import LeftMenu from "../LeftMenu";
import RightMenu from "../RightMenu";
import TradeAnalizer from "../Pages/TradeAnalizer";
import SetupTester from "../Pages/SetupTester";
import Error from "../Error";
import Loader from "../Components/Loader/loader";
import useMain from "./UIController/main";
export default function Main() {
    useInit();
    useMain();
    useMainController();
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const loading = useSelector((state) => state.actions.loading);
    return (
        <div className={`main`}>
            {loading && <Loader />}
            <Header />
            <section className="s-main">
                <LeftMenu />

                {loggedIn ? (
                    <Routes>
                        <Route path="/error" element={<Error />} />
                        <Route
                            path="/trade-analizer"
                            element={<TradeAnalizer />}
                        />
                        <Route path="/setup-tester" element={<SetupTester />} />
                        <Route path="/*" element={<TradeAnalizer />} />
                    </Routes>
                ) : (
                    <div>dsa</div>
                )}
                <RightMenu />
            </section>
        </div>
    );
}
