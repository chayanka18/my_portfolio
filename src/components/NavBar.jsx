import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-effect shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-signature font-semibold text-white">
              
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  className="text-gray-300 hover:text-white capitalize cursor-pointer 
                           transition-all duration-300 relative group font-medium"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 
                                 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer z-20 text-gray-300 hover:text-white md:hidden 
                     transition-colors duration-300"
          >
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          {/* Mobile Navigation */}
          {nav && (
            <div className="fixed inset-0 bg-black/95 backdrop-blur-sm md:hidden">
              <ul className="flex flex-col justify-center items-center h-full space-y-8">
                {links.map(({ id, link }) => (
                  <li key={id}>
                    <Link
                      onClick={() => setNav(false)}
                      to={link}
                      smooth
                      duration={500}
                      className="text-white text-2xl capitalize cursor-pointer 
                               hover:text-primary-500 transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
