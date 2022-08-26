// Import React 
import React from "react";

// Import Components
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Teams from "../../Components/Teams/Teams";
import Delivering from "../../Components/Delivering/Delivering";
import Ready from "../../Components/Ready/Ready";
import Footer from "../../Components/Footer/Footer";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Teams />
            <Delivering />
            <Ready />
            <Footer/>
        </>
    )
}

export default Home