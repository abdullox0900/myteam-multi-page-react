// Import React 
import React from "react";
import Container from "../Container/Container";

// Import Components
import "../Header/Header.scss";
import Logo from "../../Assets/Icon/myteam-logo.svg";

function Header() {
    return (
        <>
            <header className="header">
                <Container>
                    <div className="header__content">
                        <div className="header__box">
                            <a className="header__logo-link" href="#">
                                <img className="header__logo-img" src={Logo} alt="logo" width={160} height={40} />
                            </a>

                            <nav className="header__nav">
                                <ul className="header__list">
                                    <li className="header__item">
                                        <a className="header__link" href="#">Home</a>
                                    </li>
                                    <li className="header__item">
                                        <a className="header__link" href="#">About</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <button className="header__menu-btn"></button>
                        <a className="header__btn" href="#">contact us</a>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header