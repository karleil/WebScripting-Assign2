import React, {useEffect} from "react"; //imports useEffect hook from React
import FullProjects from "../components/FullProjects"; // imports FullProjects component so we render it.


function ProjectsScreen() {
    
    // Same explanation as AboutScreen
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return(
        <>
            <FullProjects/> 
        </>
    )
}

export default ProjectsScreen;