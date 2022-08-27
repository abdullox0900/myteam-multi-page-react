// Import React 
import React, { useRef } from "react";
import { NavLink as Link } from "react-router-dom";

// Import Components
import "../Header/Header.scss";
import Container from "../Container/Container";
import Logo from "../../Assets/Icon/myteam-logo.svg";

function Header() {

    const elHeader = useRef();
    const elBtn = useRef();

    return (
        <>
            <header className="header" ref={elHeader} onClick={(evt) => {
                if (
                    evt.target.matches(".header") || evt.target.matches(".header__close")
                ) {
                    elHeader.current.classList.remove("header--open");
                }
            }}>
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

                        <div className="menu-nav">
                            <ul className="header__list">
                                <li className="header__item">
                                    <Link to={"/"} className="header__link">Home</Link>
                                </li>
                                <li className="header__item">
                                    <Link to={"/about"} className="header__link">About</Link>
                                </li>
                            </ul>
                            <button className="header__clos" onClick={() => {
                                elHeader.current.classList.remove("header--open")
                            }}></button>
                            <Link to={"/contact"} className="header__btn">contact us</Link>
                        </div>

                        <Link to={"/contact"} className="header__btn">contact us</Link>
                        <button className="header__menu-btn" ref={elBtn} onClick={() => {
                            elHeader.current.classList.add("header--open")
                        }}></button>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header