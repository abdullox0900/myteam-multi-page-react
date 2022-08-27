// Import React 
import React from "react";
import {NavLink as Link} from "react-router-dom";

// Import Components
import "../Header/Header.scss";
import Container from "../Container/Container";
import Logo from "../../Assets/Icon/myteam-logo.svg";

function Header() {
    return (
        <>
            <header className="header">
                <Container>
                    <div className="header__content">
                        <div className="header__box">
                            <Link to={"/"} className="header__logo-link" href="#">
                                <img className="header__logo-img" src={Logo} alt="logo" width={160} height={40} />
                            </Link>

                            <nav className="header__nav">
                                <ul className="header__list">
                                    <li className="header__item">
                                        <Link to={"/"} className="header__link">Home</Link>
                                    </li>
                                    <li className="header__item">
                                        <Link to={"/about"} className="header__link">About</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <button className="header__menu-btn"></button>
                        <Link to={"/contact"} className="header__btn">contact us</Link>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header