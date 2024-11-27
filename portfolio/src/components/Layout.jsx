import React from "react";
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
        <div className=" bg-neutral-850 p-1">
            <header className="flex justify-between items-center  w-[80%] mx-auto py-4">
                <Link to="/"><img className="w-9" src="/logo.svg" alt="logo" /></Link>
                <nav>
                    <ul className="flex item-center text-white ">
                        <li><a className="px-4 hover:text-cyan-300 transition duration-300" href="/">Home</a></li>
                        <li><a className="px-4 hover:text-cyan-300 transition duration-300" href="/about">About</a></li>
                        <li><a className="px-4 hover:text-cyan-300 transition duration-300" href="/projects">Projects</a></li>
                    </ul>
                </nav>
            </header>
        </div>
            <main>
                <Outlet />
            </main>

            <footer className="text-white bg-neutral-850 pt-8">
                <div className="flex justify-center space-x-12 mb-4">
                    <a href="https://github.com/karleil" target="_blank"><button><img src="/github.svg" alt="footer icon" className="w-14 opacity-80 hover:opacity-100 transition duration-300" /></button></a>
                    <a href="https://www.linkedin.com/in/karleil-jefrimari-villareal-58b188257/" target="_blank"><button><img src="/linkedin.svg" alt="footer icon" className="w-14 opacity-80 hover:opacity-100 transition duration-300" /></button></a>
                    <a href="mailto:karleillvillareal@gmail.com" target="_blank"><button><img src="/email.svg" alt="footer icon" className="w-14 pt-2 opacity-85 hover:opacity-100 transition duration-300" /></button></a>
                </div>
                <p className="text-lg text-center pt-8 pb-2">&copy; Karleil Villareal 2024 | Vancouver, BC</p>
            </footer>
    </div>

    );
};
    export default Layout;