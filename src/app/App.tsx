/* eslint-disable react/react-in-jsx-scope */

import "./styles/index.scss";

import { Suspense} from "react";
import { UseTheme } from "./provides/ThemeProveder/lib/UseTheme";
import { classNames } from "../shared/config/lib/ClassNames/ClassNames";
import { AppRouter } from "./provides/router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";



const App = () => {
    const { theme } = UseTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
