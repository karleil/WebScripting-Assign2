import React from "react";
import { Link } from 'react-router-dom';

function Intro() {
    return (
        <div className="bg-neutral-850 pb-2 lg:pb-10">
            <h1 
                className="font-bold text-4xl md:text-4xl lg:text-6xl text-center text-white py-4 md:py-8 lg:pt-10 lg:pb-16" 
                style={{ textShadow: "1px 2px 5px #00ffff" }}
            >
                INTRODUCTION
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 text-white text-xl m-auto lg:mx-52 mt-5 px-4 sm:px-0">
                {/* Image */}
                <img 
                    className="w-24 sm:w-32 md:w-56 lg:w-80 m-auto rounded-2xl" 
                    src="/leil.png" 
                    alt="" 
                />
                
                {/* Text Content */}
                <div className="sm:mr-7 mt-5 sm:mt-0">
                    <p className="text-xs sm:text-sm lg:text-xl mx-2 lg:mx-0 sm:mt-5 lg:mt-14 mb-3 sm:mb-14 lg:mb-14" >
                        Hi, I'm Karleil Villareal. My passion lies in creating user-centered designs that are not only visually engaging but also intuitive and accessible. I enjoy turning complex challenges into simple solutions, focusing on both aesthetics and functionality. <br/><br/> 
                        Currently a student, I am constantly expanding my skills and exploring new design trends, eager to apply my knowledge to real-world projects.
                    </p>
                    
                    {/* Buttons */}
                    <div className="flex justify-center lg:justify-start gap-4 text-xs pt-3 lg:pt-0 sm:text-sm lg:text-lg">
                        <Link to="/about">
                            <button 
                                className="bg-cyan-400 px-4 py-1.5 rounded-2xl text-cyan-950 font-semibold shadow-md shadow-cyan-700 hover:bg-cyan-700 hover:text-white transition duration-300"
                            >
                                More about me
                            </button>
                        </Link>
                        <button 
                            className="border-2 border-white hover:text-cyan-400 hover:border-cyan-400 px-4 py-1 rounded-2xl transition duration-300" 
                            style={{ boxShadow: "1px 1px 5px #00ffff", textShadow: "1px 2px 5px #00ffff" }}
                        >
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;