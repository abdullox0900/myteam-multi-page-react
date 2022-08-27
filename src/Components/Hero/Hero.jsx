// Import React
import React from "react";

// Import Components
import "../Hero/Hero.scss";
import Container from "../Container/Container";


function Hero() {
    return (
        <>
            <section className="hero">
                <Container>
                    <div className="hero__content">
                        <h1 className="hero__title">Find the best <span>talent</span></h1>

                        <p className="hero__desc" data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            Finding the right people and building high performing teams can be hard.
                            Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Hero 