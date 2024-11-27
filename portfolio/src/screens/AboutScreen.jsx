import React from "react";
import { useEffect } from "react";
import AboutHero from "../components/AboutHero";
import Toolkit from "../components/Toolkit";
import Values from "../components/Values";

function AboutScreen() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
            <AboutHero />
            <Toolkit />
            <Values />
        </>
    )
}

export default AboutScreen;