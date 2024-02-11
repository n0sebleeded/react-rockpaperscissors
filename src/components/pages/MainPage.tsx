import '../components-styles/mainPage.css';
import { motion } from 'framer-motion';
import {Link} from "react-router-dom";

const MainPage = () => {

    const vertical = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 },
    };

    const horizontal = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    const fade = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    }

    /*useEffect(() => {
        const socket = new SockJS('http://192.168.0.103:8080/ws');
        const stompClient = Stomp.over(socket);

        stompClient.connect({}, function () {
            stompClient.subscribe('/topic/kek', function (message) {
                console.log('Received message from server:', message);
            });

            // Отправка сообщения
            stompClient.send('/app/sendKek', {}, 'Hello, WebSocket from Stomp!');

        });

        // Отключение сокета при размонтировании компонента
        return () => {
            socket.close();
        };
    }, []);*/

    return (
        <div className="main-container">
            <div className="sub-container">
                <div className="leftside-container">
                    <h1 className="main-text">
                        <motion.div
                            variants={vertical}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{duration: 1}}
                        >
                            <span className="rock">ROCK-</span><br/>
                        </motion.div>
                        <motion.div
                            variants={vertical}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{duration: 1, delay: 0.5}}
                        >
                            <span className="paper">PAPER-</span><br/>
                        </motion.div>
                        <motion.div
                            variants={vertical}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{duration: 1, delay:1}}
                        >
                            <span className="scissor">SCISSOR</span><br/>
                        </motion.div>
                    </h1>
                </div>
                <div className="rightside-container">
                    <div className="main-img-container">
                        <motion.div variants={horizontal}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{duration: 1}}
                        >
                            <img className="main-img" src="../../../src/assets/card_rock.svg" alt="rock"/>
                        </motion.div>
                        <motion.div variants={horizontal}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{duration: 1, delay: 0.5}}
                        >
                            <img className="main-img" src="../../../src/assets/card_paper.svg" alt="paper"/>
                        </motion.div>
                        <motion.div variants={horizontal}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{duration: 1, delay: 1}}
                        >
                            <img className="main-img" src="../../../src/assets/card_scissor.svg" alt="scissor"/>
                        </motion.div>
                    </div>
                    <motion.div variants={fade}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{duration: 2, delay: 0}}>
                        <p className="sub-text">
                            Welcome to RPS🥳 .
                            RPS is a unique platform for playing an unusual form of the well-known game - rock paper scissors.
                            In order to play with other players or your friends you need to <Link to="/register" className="highlighted-text">register</Link>👀.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;