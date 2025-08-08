import aeLogo from "../assets/aename-white.png";

const Header = () => {
  return (
    <header className="mt-4 w-2/3 rounded-2xl mx-auto py-4 bg-ash-blue">
      <ul className="flex justify-evenly items-center">
        <li>
          <img src={aeLogo} alt="AE Logo" className="h-6" />
        </li>
        <li>About</li>
        <li>Projects</li>
        <li>Extras</li>
        <li>Skills</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </header>
  );
};

export default Header;
