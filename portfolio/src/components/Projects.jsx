import { useEffect } from 'react';
import React from "react";
import { Link } from 'react-router-dom';

function Projects() {

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
            "title": "WIJU: Enjoy music \"with you\"",
            "type": "UI/UX Design",
            "dscrpt": "A friend making app that lets you connect to other users through your music preference.",
            "img": "/proj2.png"
        },
        {
            "id": 3,
            "title": "Book a Band: Asset Creation",
            "type": "Graphic Design",
            "dscrpt": "Asset creation for an app that lets you book bands for events or register as a band to be booked.",
            "img": "/proj3.png"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 pb-5 p-5 sm:p-10 lg:pt-24">
            <div>
                <h1 
                    className="font-bold text-4xl sm:text-6xl text-center text-white mb-10 sm:mb-20 mt-5" 
                    style={{ textShadow: "1px 2px 5px #00ffff" }}
                >
                    PROJECTS
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 mx-5 sm:mx-12">
    {projectData.map((project) => (
        <Link
            key={project.id}
            to={
                project.id === 1
                    ? "./project1"
                    : project.id === 2
                    ? "/project2"
                    : project.id === 3
                    ? "/project3"
                    : "./"
            }
        >
        
        <div className="px-5 pb-5 pt-4 mb-3 hover:shadow-cyan-600 shadow-lg bg-zinc-800 rounded-xl transition duration-500">
            <img
                src={project.img}
                alt={project.title}
                className={`w-full rounded-lg ${project.id === 1 ? "cursor-pointer" : ""}`}
            />
                        
            <div className="text-white mt-4">
                <button
                    className={`px-2 py-1 rounded-2xl font-light border ${
                    project.type === "Graphic Design"
                    ? "text-cyan-300 border-cyan-300"
                    : "text-yellow-400 border-yellow-400"
                    }`}
                >
                    {project.type}
                </button>
                    <h1 className="font-bold text-lg sm:text-xl pt-2">{project.title}</h1>
                    <p className="text-sm sm:text-base w-full">{project.dscrpt}</p>
                </div>
        </div>
        </Link>
        ))}

        </div>

            <div className="flex justify-center sm:justify-end pr-0 sm:pr-24 py-10 sm:py-14">
                <Link to="/projects">
                    <button 
                        className="text-lg sm:text-xl border-2 px-4 py-2 rounded-xl text-white hover:border-cyan-400 hover:text-cyan-400 transition duration-300" 
                        style={{ boxShadow: "1px 1px 5px #00ffff", textShadow: "1px 1px 3px #00ffff" }}
                    >
                        View more projects
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Projects;
