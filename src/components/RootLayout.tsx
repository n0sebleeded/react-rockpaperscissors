import { Outlet } from "react-router-dom";
import './components-styles/rootLayout.css';
import OpenBurger from "./pages/OpenBurger.tsx";
import AnimatedDiv from "./AnimatedDiv.tsx";
import React from "react";
import {useSelector} from "react-redux";
import {IRootStateBurger} from "../redux/actionTypes.ts";
import {AnimatePresence} from "framer-motion";

const RootLayout:React.FC = () => {
    const isOpen = useSelector((state: IRootStateBurger) => state.burger.isOpen);

    const vertical = {
        initial: { x: -400 },
        animate: { x: 0 },
        exit: { x: 400 } ,
    };

    //TODO: Block overflow framer-motion while animating.
    return (
        <>
            <AnimatePresence mode="wait">
                {isOpen &&
                    <AnimatedDiv className="burger-open-container" variant={vertical} transition={{duration: 0.5, easy: "spring", delay: 0}}>
                        <OpenBurger />
                    </AnimatedDiv>
                }
            </AnimatePresence>
            <div className="outlet-container">
                <Outlet/>
            </div>
        </>
    );
};

export default RootLayout;