import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./burgerMenu.css"; // Custom CSS for react-burger-menu

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="bg-neutral-850 p-1">
        <header className="flex justify-between items-center w-[80%] mx-auto py-4">
          <Link to="/">
            <img className="w-9" src="/logo.svg" alt="logo" />
          </Link>


          <nav className="hidden md:flex flex-1 justify-end">
            <ul className="flex items-center text-white">
              <li>
                <a
                  className="px-4 hover:text-cyan-300 transition duration-300 hover:underline underline-offset-4 decoration-2"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="px-4 hover:text-cyan-300 transition duration-300 hover:underline underline-offset-4 decoration-2"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="px-4 hover:text-cyan-300 transition duration-300 hover:underline underline-offset-4 decoration-2"
                  href="/projects"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>


          <div className="block md:hidden">
            <Menu
              right
              isOpen={isMenuOpen}
              onStateChange={handleMenuStateChange}
            >
              <a href="/" onClick={closeMenu}>
                Home
              </a>
              <a href="/about" onClick={closeMenu}>
                About
              </a>
              <a href="/projects" onClick={closeMenu}>
                Projects
              </a>
            </Menu>
          </div>
        </header>
      </div>


      <main>
        <Outlet />
      </main>


      <footer className="text-white bg-neutral-850 pt-8">
        <div className="flex justify-center space-x-12 mb-4">
          <a href="https://github.com/karleil" target="_blank">
            <button>
              <img
                src="/github.svg"
                alt="footer icon"
                className="w-14 opacity-80 hover:opacity-100 transition duration-300 hover:scale-[115%]"
              />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/karleil-jefrimari-villareal-58b188257/"
            target="_blank"
          >
            <button>
              <img
                src="/linkedin.svg"
                alt="footer icon"
                className="w-14 opacity-80 hover:opacity-100 transition duration-300 hover:scale-[115%]"
              />
            </button>
          </a>
          <a href="mailto:karleillvillareal@gmail.com" target="_blank">
            <button>
              <img
                src="/email.svg"
                alt="footer icon"
                className="w-14 pt-2 opacity-85 hover:opacity-100 transition duration-300 hover:scale-[115%]"
              />
            </button>
          </a>
        </div>
        <p className="text-lg text-center pt-8 pb-2">
          &copy; Karleil Villareal 2024 | Vancouver, BC
        </p>
      </footer>
    </div>
  );
};

export default Layout;
