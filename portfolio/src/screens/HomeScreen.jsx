import React, {useEffect} from "react";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Projects from "../components/Projects";

function HomeScreen() {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);


    return(
        <>
          <Banner />
          <Intro />
          <Projects />
        </>
    )
}

export default HomeScreen;