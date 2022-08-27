// Import React 
import React from "react";
import Container from "../Container/Container";

// Import Components
import "../Some/Some.scss";
import someImg1 from "../../Assets/Icon/Object-1.svg";
import someImg2 from "../../Assets/Icon/Object-2.svg";
import someImg3 from "../../Assets/Icon/Object-3.svg";
import someImg4 from "../../Assets/Icon/Object-4.svg";
import someImg5 from "../../Assets/Icon/Object-5.svg";

function Some() {

    const someImgArr = [
        {
            img: someImg1,
        },
        {
            img: someImg2,
        },
        {
            img: someImg3,
        },
        {
            img: someImg4,
        },
        {
            img: someImg5,
        },
    ]

    return (
        <>
            <section className="some">
                <Container>
                    <h2 className="some__title">Some of our clients</h2>
                    <ul className="some__list">
                        {
                            someImgArr.map((data) => {
                                return (
                                    <>
                                        <li className="some__item">
                                            <img className="some__img" src={data.img} alt="some-img" />
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </Container>
            </section>
        </>
    )
}

export default Some