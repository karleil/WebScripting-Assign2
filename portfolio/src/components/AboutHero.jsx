import React from "react";

export default function AboutHero() {
    return (
        <div
            className="bg-neutral-800 pt-20 pb-20"
            style={{
                backgroundImage: "url('/banner_about.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="pb-10 grid grid-cols-1 md:grid-cols-2 md:px-44 pt-10 m-auto text-white w-[90%] md:w-[85%]">
                <div className="py-5 ">
                    <h1
                        className="text-5xl md:text-7xl font-bold pb-5"
                        style={{ textShadow: "1px 2px 5px #00ffff" }}
                    >
                        ABOUT ME <br />
                    </h1>
                    <p className="text-sm md:text-lg">
                        Hello,{" "}
                        <span className="text-cyan-300">I'm Karleil Villareal,</span> but you
                        can call me <span className="text-cyan-300">Leil</span>. I was born and
                        raised in the Philippines, and I'm currently taking the New Media Design
                        and Web Development program at BCIT. My journey has been all about
                        blending creativity with functionality, diving into the world of UI/UX
                        and graphic design to create meaningful digital experiences.
                        <br /> <br />
                        Outside of my studies and projects, you'll often find me with a guitar or
                        drumsticks in hand, playing my instruments. I also love photography and
                        playing online games. This mix of interests keeps my creativity flowing
                        and helps me bring a fresh perspective to every project I take on.
                    </p>
                    <div className="flex justify-center">
                        <a href="https://drive.google.com/file/d/1uXwKTvAY0WUU8W1MUsx2fKpMD74xkI2f/view?usp=sharing" target="_blank">
                        <button
                            className="border-2 border-white hover:border-cyan-400 px-4 py-2 mt-8 rounded-xl text-sm md:text-xl hover:text-cyan-300 transition duration-500 hover:scale-[105%]"
                            style={{
                                boxShadow: "1px 1px 5px #00ffff",
                                textShadow: "1px 2px 5px #00ffff",
                            }}
                        >
                            View my Resume
                        </button>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img
                        className="w-60 md:w-96 rounded-2xl"
                        src="/about1.png"
                        alt="about page photo"
                    />
                </div>
            </div>
        </div>
    );
}
