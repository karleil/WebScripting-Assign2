import React, { useState } from "react"; //imports useState hook from react
import { Link, Outlet } from "react-router-dom"; //imports Link, and Outlet function from react-router-dom
import { slide as Menu } from "react-burger-menu"; //uses the slide animation from the react-burger-menu library
import "./burgerMenu.css"; // Custom CSS for react-burger-menu

const Layout = () => {
  //uses the useState hook to set the state of our hamburger menu
  //tracks the menu if its open or not
  const [menuOpen, setmenuOpen] = useState(false);

  // function to handle the state change of the menu.
  const menuHandle = (state) => {
    setmenuOpen(state.isOpen);
  };

  //sets the state of opened menu to false and closes our menu 
  const closeMenu = () => {
    setmenuOpen(false); 
  };

  return (
    <div>
      <div className="bg-neutral-850 p-1">
        <header className="flex justify-between items-center w-[80%] mx-auto py-4">
          {/* Link tag is used to go to another page without reloading the page */}
          <Link to="/">
            <img className="w-9" src="/logo.svg" alt="logo" />
          </Link>


          <nav className="hidden md:flex flex-1 justify-end">
            <ul className="flex items-center text-white">
              <li><a className="px-4 hover:text-cyan-300 transition duration-300 hover:underline underline-offset-4 decoration-2" href="/">Home</a></li>
              <li><a className="px-4 hover:text-cyan-300 transition duration-300 hover:underline underline-offset-4 decoration-2" href="/about">About</a></li>
              <li><a className="px-4 hover:text-cyan-300 transition duration-300 hover:underline underline-offset-4 decoration-2" href="/projects">Projects</a></li>
            </ul>
          </nav>
          
          <div className="block md:hidden">
            <Menu
              right
              isOpen={menuOpen} // controls the open/close state of the menu using the `menuOpen` state variable.
              onStateChange={menuHandle} // Called whenever the menu's open/close state changes. 
            >
              <a href="/" onClick={closeMenu}>
                Home</a>
              <a href="/about" onClick={closeMenu}>
                About</a>
              <a href="/projects" onClick={closeMenu}>
                Projects</a>
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
