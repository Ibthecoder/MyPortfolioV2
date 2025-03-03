import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "@constant/PortfolioData";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="bg-gray-50 lg:py-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Navigation Bar */}
          <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
            <div className="flex-shrink-0">
              <NavLink to={"/"}>
                <h3 className="text-2xl font-extrabold font-[Pochaevsk] cursor-pointer">
                  {" "}
                  {"< Brahim />"}{" "}
                </h3>
              </NavLink>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              {/* Hamburger Icon */}
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>

              {/* Close Icon */}
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex lg:items-center lg:space-x-10">
              {MenuItems.map(({ name, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    title={name}
                    className="text-base font-semibold font-[Pochaevsk] text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 cursor-pointer "
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Slide-in from Right */}
          <div
            ref={menuRef}
            className={`fixed inset-y-0 right-0 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden`}
          >
            <ul className="flex flex-col items-start space-y-6 p-6 mt-10 ">
              {MenuItems.map(({ name, path }) => (
                <li key={path} className="w-full">
                  <NavLink
                    to={path}
                    title={name}
                    className="text-base font-[Pochaevsk] font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    onClick={toggleMenu}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
