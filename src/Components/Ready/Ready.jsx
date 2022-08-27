// Import React
import React from "react";
import {NavLink as Link} from "react-router-dom";

// Import Components
import "../Ready/Ready.scss";
import Container from "../Container/Container";


function Ready() {
    return(
        <>
            <section className="ready">
                <div className="ready__container">
                    <div className="ready__box">
                        <h3 className="ready__title">Ready to get started?</h3>
                        <Link to={"/contact"} className="ready__btn" href="#">contact us</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ready