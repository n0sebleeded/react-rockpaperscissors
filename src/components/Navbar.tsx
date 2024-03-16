import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './components-styles/rootLayout.css'
import NavbarContainer from "./styled-components/NavbarContainer.ts";
import NavbarBurger from "./styled-components/NavbarBurger.ts";
import AnimatedDiv from "./AnimatedDiv.tsx";
import { Button } from "@mui/material";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setBurger} from "../redux/reducers/burgerSlice.ts";
import {IRootStateBurger} from "../redux/actionTypes.ts";


const Navbar:React.FC = () => {
    const dispatch = useDispatch();
    const burgerOpen = useSelector((state:IRootStateBurger) => state.burger);

    const onClick = () => {
        console.log(burgerOpen);
        dispatch(setBurger({isOpen: !burgerOpen.isOpen}));
    }

    const vertical = {
        initial: { y: -100 },
        animate: { y: 0 },
        exit: { y: 100 } ,
    };
    return (
        <>
            <AnimatedDiv className="navbar" variant={vertical} transition={{duration: 1.5, type: "spring", delay: 1}}>
                <NavbarContainer>
                    <div className="navbar-item-set">
                        <Link to="/">
                            <motion.div className="logo-img-container" whileTap={{scale: 0.9}}
                                        transition={{type: "spring"}}>
                                <img className="logo-img" src="../../src/assets/card_rock.svg" alt="rock"/>
                                <img className="logo-img" src="../../src/assets/card_paper.svg" alt="paper"/>
                                <img className="logo-img" src="../../src/assets/card_scissor.svg" alt="scissor"/>
                            </motion.div>
                        </Link>
                    </div>
                    <div className="navbar-item-set">
                        <Link to="/tech" className="navbar-item">
                            <motion.p whileTap={{scale: 0.9}} transition={{type: "spring"}}>Used technologies</motion.p>
                        </Link>
                        <Link to="/idea" className="navbar-item">
                            <motion.p whileTap={{scale: 0.9}} transition={{type: "spring"}}>What's idea?&#129300;</motion.p>
                        </Link>
                    </div>
                    <div className="navbar-item-set">
                        <Link to="/about" className="navbar-item">
                            <motion.p whileTap={{scale: 0.9}} transition={{type: "spring"}}>About us</motion.p>
                        </Link>
                        <Link to="/register" className="navbar-item">
                            <motion.p whileTap={{scale: 0.9}} transition={{type: "spring"}}>Login/Register</motion.p>
                        </Link>
                    </div>
                </NavbarContainer>
                <NavbarBurger>
                    <Button onClick={onClick} sx={{scale: "2"}}>≡</Button>
                </NavbarBurger>
            </AnimatedDiv>
        </>
    );
};

export default Navbar;