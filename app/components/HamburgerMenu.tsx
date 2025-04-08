import { useState } from "react";
import { FaHamburger } from "react-icons/fa"; // Install this package if not yet installed: npm install react-icons
import { IoIosClose } from "react-icons/io"; // For close icon
import { MdSlideshow } from "react-icons/md"; // Icon representing slideshow or presentation

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className="p-2 text-3xl text-white lg:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? <IoIosClose /> : <FaHamburger />}
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-0 right-0 w-48 mt-8 bg-blue-800 text-white shadow-lg rounded-md transition-all transform ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      >
        <ul className="flex flex-col items-center">
          <li className="my-2">
            <a
              href="https://docs.google.com/presentation/d/your-presentation-id1"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 hover:bg-blue-600 rounded-md"
            >
              <MdSlideshow className="text-3xl" />
            </a>
          </li>
          <li className="my-2">
            <a
              href="https://docs.google.com/presentation/d/your-presentation-id2"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 hover:bg-blue-600 rounded-md"
            >
              <MdSlideshow className="text-3xl" />
            </a>
          </li>
          <li className="my-2">
            <a
              href="https://docs.google.com/presentation/d/your-presentation-id3"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 hover:bg-blue-600 rounded-md"
            >
              <MdSlideshow className="text-3xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
