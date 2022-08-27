// Import React
import React from "react";
import { NavLink as Link } from "react-router-dom";

// Import Components
import "../Footer/Footer.scss";
import Container from "../Container/Container";
import Logo from "../../Assets/Icon/myteam-logo.svg";

function Footer() {
    return (
        <>
            <footer className="footer">
                <Container>
                    <div className="footer__content">
                        <div className="footer__left">
                            <div className="footer__wrap">
                                <Link to={"/"} className="footer__logo-link">
                                    <img className="footer__logo-img" src={Logo} alt="logo-img" width={160} height={40} />
                                </Link>
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <Link to={"/"} className="footer__link">Home</Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link to={"/about"} className="footer__link">About</Link>
                                    </li>
                                </ul>
                            </div>

                            <p className="footer__info">
                                987  Hillcrest Lane
                                <br /> 
                                Irvine,CA 
                                <br />
                                California 92714 
                                <br />
                                Call Us : 949-833-7432
                            </p>
                        </div>

                        <div className="footer__right">
                            <ul className="footer__soch-list">
                                <li className="footer__soch-item">
                                    <a className="footer__soch-link" href="#" target={"_blank"}>
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>

                                <li className="footer__soch-item">
                                    <a className="footer__soch-link" href="#" target={"_blank"}>
                                        <ion-icon name="logo-pinterest"></ion-icon>
                                    </a>
                                </li>

                                <li className="footer__soch-item">
                                    <a className="footer__soch-link" href="#" target={"_blank"}>
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>
                            </ul>

                            <p className="footer__in">Copyright 2020. All Rights Reserved</p>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer