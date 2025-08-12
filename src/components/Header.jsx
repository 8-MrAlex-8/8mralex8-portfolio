import aeLogo from "../assets/aename-white.png";
import "../styles/Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="h-16 w-11/12 md:w-2/3 rounded-2xl mt-4 fixed bg-ash-blue 
        left-1/2 -translate-x-1/2 z-50 shadow-lg"
    >
      <ul className="flex justify-evenly items-center h-full px-4 text-white lato">
        <li>
          <button onClick={() => scrollToSection("hero")}>
            <img src={aeLogo} alt="AE Logo" className="h-5 md:h-6" />
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("about")}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("extras")}>Extras</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("resume")}>Resume</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
