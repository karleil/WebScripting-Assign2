import React, {useEffect} from "react";
import FullProjects from "../components/FullProjects";



function ProjectsScreen() {

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