import { useState } from "react";
import { Link } from "react-router-dom";
import { navLink } from "../../Data";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full h-30 bg-teal-800">
      <div className="max-w-[90vw] mx-auto h-full flex items-center justify-between px-4">
        <div className="logo-container">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            V&C <span className="text-[#F5C542]">Rentals</span>
          </h1>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>

        <div
          className={`links-container fixed md:static top-20 left-0 w-full md:w-auto bg-teal-800 md:bg-transparent flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-12 text-lg transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden md:flex"
          } md:flex md:items-center md:justify-between py-4 md:py-0`}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {navLink.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white hover:text-[#F5C542] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="contact">
            <Link
              to="/Contact"
              className="block px-6 py-2 text-teal-800 bg-[#F5C542] hover:bg-[#E5B532] rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;