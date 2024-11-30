import React from "react";
import AOS from 'aos' // imports AOS library
AOS.init();// Runs the libbrary 


//Nothing much here, just some info and css
export default function Values() {
    return (
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 mt-10 pb-32 text-lg px-8 lg:px-16">
            <h1 className="text-center font-bold text-4xl md:text-5xl text-white pb-16" style={{ textShadow: "1px 2px 5px #00ffff" }}>MY VALUES</h1>
            <div data-aos="fade-up"  className="text-white grid grid-cols-1 md:grid-cols-3 gap-12 w-full mx-auto">
                <div className="px-6 md:px-10 text-center">
                    <img src="./values/commitment.png" alt="commitment symbol" className="w-1/4 mx-auto pb-6"/>
                    <h1 className="text-xl md:text-2xl font-bold pb-4">Commitment</h1>
                    <p>
                        I always put in the effort required to my works, whether independently or as
                        part of a team. Being committed means that others can rely on you to see
                        projects through to completion, no matter how challenging the project is.
                    </p>
                </div>
                <div className="px-6 md:px-10 text-center">
                    <img src="./values/balance.png" alt="balance symbol" className="w-1/4 mx-auto pb-6"/>
                    <h1 className="text-xl md:text-2xl font-bold pb-4">Balance</h1>
                    <p>
                        I take a balanced approach, considering different viewpoints to ensure that
                        outcomes are fair. I think being able to remain neutral helps create an
                        inclusive and respectful workplace.
                    </p>
                </div>
                <div className="px-6 md:px-10 text-center">
                    <img src="./values/adaptability.png" alt="adaptability symbol" className="w-1/4 mx-auto pb-6"/>
                    <h1 className="text-xl md:text-2xl font-bold pb-4">Adaptability</h1>
                    <p>
                        When faced with tight deadlines or unexpected challenges, I remain calm and
                        focused. Being able to adapt quickly to changing situations allows us to
                        continue delivering quality work even under pressure.
                    </p>
                </div>
            </div>
        </div>
    );
    
}