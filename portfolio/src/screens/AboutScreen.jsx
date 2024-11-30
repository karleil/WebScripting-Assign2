import React from "react";
import { useEffect } from "react"; //imports useEffect hook from React
import AboutHero from "../components/AboutHero"; //imports the AboutHero component so we can use and render it.
import Toolkit from "../components/Toolkit"; //imports the Toolkit component so we can use and render it. 
import Values from "../components/Values"; //imports the Values component so we can use and render it.

function AboutScreen() {

    // Whenever I scroll down to a page, leave and then go back, it loads the page where I left it instead of the top of the page.
    // This will always load the page on top (Not Recommended when you're still coding cause it goes up whenever you change something in the code).
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        //Renders the components we imported. 
        <>
            <AboutHero />
            <Toolkit />
            <Values />
        </>
    )
}

export default AboutScreen;