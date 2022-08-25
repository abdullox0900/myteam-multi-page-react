// Import React 
import React from "react";

// Import Components
import "../Teams/Teams.scss"
import Container from "../Container/Container";
import OneImg from "../../Assets/Icon/icon-experienced.svg";
import TwoImg from "../../Assets/Icon/icon-gear.svg";
import ThreeImg from "../../Assets/Icon/icon-stat.svg";

function Teams() {
    return (
        <>
            <section className="teams">
                <Container>
                    <div className="teams__box">
                        <h2 className="teams__title">Build & manage distributed teams like no one else.</h2>

                        <ul className="teams__list">
                            <li className="teams__item">
                                <img className="teams__icon" src={OneImg} alt="ils-icon" width={72} height={72} />

                                <div className="team__wrap">
                                    <h5 className="teams__item-title">Experienced Individuals</h5>
                                    <p className="teams__item-desc">
                                        Our network is made up of highly
                                        experienced professionals who are
                                        passionate about what they do.
                                    </p>
                                </div>
                            </li>
                            <li className="teams__item">
                                <img className="teams__icon" src={TwoImg} alt="ils-icon" width={72} height={72} />

                                <div className="team__wrap">
                                    <h5 className="teams__item-title">Easy to Implement</h5>
                                    <p className="teams__item-desc">
                                        Our processes have been refined over years
                                        of implementation meaning our teams always deliver.
                                    </p>
                                </div>
                            </li>
                            <li className="teams__item">
                                <img className="teams__icon" src={ThreeImg} alt="ils-icon" width={72} height={72} />

                                <div className="team__wrap">
                                    <h5 className="teams__item-title">Enhanced Productivity</h5>
                                    <p className="teams__item-desc">
                                        Our customized platform with in-built
                                        analytics helps you manage your distributed teams.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Teams