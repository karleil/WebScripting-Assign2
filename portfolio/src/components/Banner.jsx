import React from "react";

function Banner() {
    return (
        <div className="relative bg-lack h-[190px] lg:h-screen md:h-[300px] overflow-hidden bg-zinc-950">
            <video className="
            absolute 
            inset-0 
            lg:w-full  
            lg:h-full 
            object-cover 
            opacity-[30%]" autoPlay loop muted>
                <source src="/bannerVid.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex flex-col pt-4 md:pt-16 lg:pt-[17%] lg:pl-14 m-12 ">
                <p className="text-white lg:ml-64 lg:text-2xl font-semibold md:ml-8 md:text-sm text-[60%] ml-7">
                    Hello, I'm a <span className="font-bold" style={{ color: "#00ffff" }}>Multidisciplinary Designer</span> based in Vancouver.
                </p>
                <h1
                    className="text-3xl  md:-ml-16 md:text-6xl lg:text-9xl font-bold text-white text-center" style={{ textShadow: "2px 3px 5px #00ffff" }}>
                    KARLEIL VILLAREAL
                </h1>
            </div>
        </div>
    );
}

export default Banner;