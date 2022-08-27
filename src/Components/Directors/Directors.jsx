// Import React 
import React, { useRef, useEffect, useState } from "react";

// Import Components
import "../Directors/Directors.scss";
import Container from "../Container/Container"
import UserImgOne from "../../Assets/Img/user-nikita.jpg";

// Import Img
import NikImg from "../../Assets/Img/user-nikita.jpg";
import CrisImg from "../../Assets/Img/user-cristian.jpg";
import CruzImg from "../../Assets/Img/user-cruz.jpg";
import DrakeImg from "../../Assets/Img/user-drake.jpg";
import GrifImg from "../../Assets/Img/user-griffin.jpg";
import AdenImg from "../../Assets/Img/user-one.jpg";

function Directors() {

    const elBtn = useRef();
    const elItem = useRef();

    const [data, setData] = useState([])

    useEffect(() => {
        const directorsData = [
            {
                id: 1,
                img: NikImg,
                title: "Nikita Marks",
                desc: "Founder & CEO",
                ovtitle: "Nikita Marks",
                ovdesc: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
            },
            {
                id: 2,
                img: CrisImg,
                title: "Cristian Duncan",
                desc: "Co-founder & COO",
                ovtitle: "Cristian Duncan",
                ovdesc: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
            },
            {
                id: 3,
                img: CruzImg,
                title: "Cruz Hamer",
                desc: "Co-founder & CTO",
                ovtitle: "Cruz Hamer",
                ovdesc: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
            },
            {
                id: 4,
                img: DrakeImg,
                title: "Drake Heaton",
                desc: "Co-founder & CTO",
                ovtitle: "Drake Heaton",
                ovdesc: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
            },
            {
                id: 5,
                img: GrifImg,
                title: "Griffin Wise",
                desc: "Lead Marketing",
                ovtitle: "Griffin Wise",
                ovdesc: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
            },
            {
                id: 6,
                img: AdenImg,
                title: "Aden Allan",
                desc: "Co-founder & CTO",
                ovtitle: "Aden Allan",
                ovdesc: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
            },
        ]

        setData(directorsData)
    }, []);


    return (
        <>
            <section className="directors">
                <Container>
                    <div className="directors__title">Meet the directors</div>

                    <ul className="directors__list">
                        {
                            data.map((data) => {
                                return (
                                    <>
                                        <li className="directors__item" key={data.id} ref={elItem} >
                                            <img className="directors__user-img" src={data.img} alt="img" width={96} height={96} />
                                            <h6 className="directors__user-name">{data.title}</h6>
                                            <p className="directors__user-desc">{data.desc}</p>
                                            <button ref={elBtn} key={data.id} className="directors__btn" onClick={(e) => {
                                                e.currentTarget.classList.toggle("name");
                                            }}></button>

                                            <div className="directors__overlane directors__overlane-item">
                                                <h2 className="directors__overlane-header">{data.ovtitle}</h2>
                                                <p className="directors__overlane-desc">{data.ovdesc}</p>
                                                <div>
                                                    <a className="directors__overlane-link" target={"_blank"} href="#">
                                                        <ion-icon name="logo-twitter"></ion-icon>
                                                    </a>
                                                    <a className="directors__overlane-link" target={"_blank"} href="#">
                                                        <ion-icon name="logo-linkedin"></ion-icon>
                                                    </a>
                                                </div>
                                            </div>

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

export default Directors