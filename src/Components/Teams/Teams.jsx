// Import React 
import React from "react";

// Import Components
import "../Teams/Teams.scss"
import Container from "../Container/Container";
import OneImg from "../../Assets/Icon/icon-experienced.svg";
import TwoImg from "../../Assets/Icon/icon-gear.svg";
import ThreeImg from "../../Assets/Icon/icon-stat.svg";

function Teams() {

    const teamNewArr = [
        {
            img: OneImg,
            title: "Experienced Individuals",
            desc: "Our network is made up of highly experienced professionals who are passionate about what they do.",
        },
        {
            img: TwoImg,
            title: "Easy to Implement",
            desc: "Our processes have been refined over years of implementation meaning our teams always deliver.",
        },
        {
            img: ThreeImg,
            title: "Enhanced Productivity",
            desc: "Our customized platform with in-built analytics helps you manage your distributed teams.",
        },
    ]

    return (
        <>
            <section className="teams">
                <Container>
                    <div className="teams__box">
                        <h2 className="teams__title">Build & manage distributed teams like no one else.</h2>

                        <ul className="teams__list">
                            {
                                teamNewArr.map((data) => {
                                    return (
                                        <>
                                            <li className="teams__item" >
                                                <img data-aos="zoom-in" className="teams__icon" src={data.img} alt="ils-icon" width={72} height={72} />

                                                <div className="team__wrap" data-aos="zoom-in-up"
                                                    data-aos-offset="300"
                                                    data-aos-easing="ease-in-sine">
                                                    <h5 className="teams__item-title">{data.title}</h5>
                                                    <p className="teams__item-desc">{data.desc}</p>
                                                </div>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Teams