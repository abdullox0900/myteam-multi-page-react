// Import React 
import React from "react";

// Import Components
import "../Contact/Contact.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Container from "../../Components/Container/Container";

// Import Img and Icon
import OneImg from "../../Assets/Icon/icon-experienced.svg";
import TwoImg from "../../Assets/Icon/icon-gear.svg";
import ThreeImg from "../../Assets/Icon/icon-stat.svg";

function Contact() {

    const newArr = [
        {
            img: OneImg,
            text: "The quality of our talent network",
        },
        {
            img: TwoImg,
            text: "Usage & implementation of our software",
        },
        {
            img: ThreeImg,
            text: "How we help drive innovation",
        },
    ]

    return (
        <>
            <Header />
            <section className="contact">
                <Container>
                    <div className="contact__box">
                        <div className="contact-left">
                            <h1 className="contact__title">Contact</h1>
                            <p className="contact__subtitle">Ask us about</p>

                            <ul className="contact__list">
                                {
                                    newArr.map((data) => {
                                        return (
                                            <>
                                                <li className="contact__item">
                                                    <img data-aos="zoom-in" className="contact__img" src={data.img} alt="contact-img" width={72} height={72} />
                                                    <p className="contact__text" data-aos="zoom-in-up"
                                                    data-aos-offset="300"
                                                    data-aos-easing="ease-in-sine">{data.text}</p>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="contact-right">
                            <form className="contact__form">
                                <input className="contact__input" type="text" placeholder="Name" />
                                <input className="contact__input" type="text" placeholder="Email Address" />
                                <input className="contact__input" type="text" placeholder="Company Name" />
                                <input className="contact__input" type="text" placeholder="Title" />
                                <textarea className="contact__textarea" placeholder="Message">

                                </textarea>
                                <button className="contact__btn">submit</button>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Contact