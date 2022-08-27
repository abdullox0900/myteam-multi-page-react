// Import React 
import React from "react";

// Import Components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import AboutCon from "../../Components/AboutCon/AboutCon";
import Directors from "../../Components/Directors/Directors";
import Some from "../../Components/Some/Some";
import Ready from "../../Components/Ready/Ready";

function About() {
    return(
        <>
            <Header/>
            <AboutCon />
            <Directors />
            <Some />
            <Ready/>
            <Footer />
        </>
    )
}

export default About