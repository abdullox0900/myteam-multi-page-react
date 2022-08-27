// Import React
import React from "react";

// Import Components
import "../../Components/AboutCon/AboutCon.scss";
import Container from "../Container/Container";


function AboutCon() {
    return (
        <>
            <section className="about-con">
                <Container>
                    <div className="about-con__box">
                        <h1 className="about-con__title">About</h1>

                        <p className="about-con__desc" data-aos="zoom-in-down"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            We help companies build dynamic teams made up of top global talent. Using our network of
                            passionate professionals we drive innovation and deliver incredible outcomes. Talented,
                            diverse teams shape the best products and experiences. We’ll bring those teams to you.
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default AboutCon