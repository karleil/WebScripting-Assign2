import React from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'



function FullProjects() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const projectData = [
        {
            "id": 1,
            "title": "Henlong Market: UI / UX Case Study and Redesign",
            "type": "UI/UX Design",
            "dscrpt": "A UI / UX case study and redesign of an Asian supermarket website 'Henlong Market'.",
            "img": "/proj1.png"
          },
          {
            "id": 2,
            "title": "WIJU: Enjoy music \"with you\" ",
            "type": "UI/UX Design" ,
            "dscrpt": "A friend making app that lets you connect to other users through your music preference.",
            "img": "/proj2.png"
          },
          {
            "id": 3,
            "title": "Book a Band: Asset Creation",
            "type": "Graphic Design",
            "dscrpt": "Asset creation for an app that let's you book bands for events or register as band to be booked.",
            "img": "/proj3.png"
          },
          {
            "id": 4,
            "title": "Telus poster Ad redesign",
            "type": "Graphic Design",
            "dscrpt": "Redesign of a shop poster outside a Telus Shop in Downtown, Vancouver",
            "img": "/proj4.png"
          },
          {
            "id": 5,
            "title": "TechMate: Youtube channel Intro Bumper ",
            "type": "Motion Graphics",
            "dscrpt": "Development of an Intro bumper for a Tech Review Youtube channel using After Effects",
            "img": "/proj5.png"
          },
          {
            "id": 6,
            "title": "BCIT Ending screen redesign ",
            "type": "Motion Graphics",
            "dscrpt": "Redesign of the Youtube outro of BCIT's Youtube channel using After Effects",
            "img": "/proj6.png"
          },
    ]
    
    
    
    return (
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 pb-24 pt-16 px-10">
            <div>
                <h1
                    className="font-bold text-6xl text-center text-white mt-5 mb-10"
                    style={{ textShadow: "1px 2px 5px #00ffff" }}
                >
                    PROJECTS
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 lg:mx-16">
                {projectData.map((project) => (
                    <div
                        key={project.id}
                        className="px-4 pb-4 pt-4 my-2 mb-9 hover:shadow-cyan-600 shadow-lg bg-zinc-800 rounded-xl transition duration-500"
                    >
                        <div className="text-white">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full rounded-t-xl"
                            />
                            <button
                                className={`mt-6 mb-2 px-2 rounded-xl font-light border ${
                                    project.type === "Graphic Design"
                                        ? "text-cyan-300 border-cyan-300"
                                        : project.type === "Motion Graphics"
                                        ? "text-red-400 border-red-400"
                                        : "text-yellow-400 border-yellow-400"
                                }`}
                            >
                                {project.type}
                            </button>
                            <h1 className="font-bold text-xl pb-3">{project.title}</h1>
                            <p className="w-full">{project.dscrpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default FullProjects;