import React, {useEffect} from "react"; //imports useEffect hook from React
import Banner from "../components/Banner"; //imports the Banner Compnent so we can render it.
import Intro from "../components/Intro"; //imports the Intro Compnent so we can render it.
import Projects from "../components/Projects"; //imports the Project Compnent so we can render it.

function HomeScreen() {

  //Same explanation as AboutScreen
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);


    return(
      //Renders the components we imported.
        <>
          <Banner />
          <Intro />
          <Projects />
        </>
    )
}

export default HomeScreen;