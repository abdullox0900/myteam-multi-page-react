// Import React 
import React from "react";

// Import Components
import "../../Components/Delivering/Delivering.scss";
import Container from "../Container/Container";
import OneImg from "../../Assets/Img/user-kady.jpg";
import TwoImg from "../../Assets/Img/user-aiysha.jpg";
import ThreeImg from "../../Assets/Img/user-arthur.jpg";

function Delivering() {

    const deliveringData = [
        {
            id: 1,
            img: OneImg,
            name: "Kady Baker",
            desc: "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
            blockquote: "Product Manager at Bookmark",
        },
        {
            id: 2,
            img: TwoImg,
            name: "Aiysha Reese",
            desc: "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
            blockquote: "Founder of Manage",
        },
        {
            id: 3,
            img: ThreeImg,
            name: "Arthur Clarke",
            desc: "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
            blockquote: "Co-founder of MyPhysio",
        },
    ]

    return (
        <>
            <section className="delivering">
                <Container>
                    <div className="delivering__box">
                        <h2 className="delivering__title">
                            Delivering real results for top companies.
                            Some of our <span>success stories.</span> 
                        </h2>

                        <ul className="delivering__list">
                            {
                                deliveringData.map((data, index) => {
                                    return (
                                        <>
                                            <li className="delivering__item" key={data.id}>
                                                <p className="delivering__item-desc">{data.desc}</p>
                                                <h6 className="delivering__user-name">{data.name}</h6>
                                                <blockquote className="delivering__blockquote">{data.blockquote}</blockquote>
                                                <img className="delivering__user-img" src={data.img} alt="img" width={62} height={62} />
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

export default Delivering