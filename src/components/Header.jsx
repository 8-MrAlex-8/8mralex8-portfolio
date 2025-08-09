import aeLogo from "../assets/aename-white.png";
import { Outlet, Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <nav
        className="h-16 w-9/10 md:w-2/3 rounded-2xl mt-4 fixed bg-ash-blue
        left-1/2 -translate-x-1/2	z-50"
      >
        <ul className="flex justify-evenly items-center h-full">
          <li>
            <Link to="/">
              <img src={aeLogo} alt="AE Logo" className="h-5 md:h-6" />
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/extras">Extras</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
      <main className="pt-28">
        <Outlet />
      </main>
    </>
  );
};

export default Header;
