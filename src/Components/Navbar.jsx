import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },         
    { name: "About", href: "/AboutMe" },  
    { name: "Projects", href: "/Projects" },
    { name: "Contact", href: "/Contactme" }, 
  ];

  return (
    <div className="relative w-full">
      <header className="absolute top-0 left-0 w-full z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link to='/'>
            <h1 className="text-white text-2xl font-bold drop-shadow-lg">
              MILOT <span className="text-blue-500">VR</span>
            </h1>
          </Link>

          
          <ul className="hidden md:flex space-x-8">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.href}
                  className="text-white hover:text-blue-700 cursor-pointer transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

         
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent shadow-xl"></div>
      </header>

   
      {menuOpen && (
        <ul className="md:hidden absolute top-[64px] left-0 w-full bg-black bg-opacity-90 p-4 flex flex-col space-y-4 z-40">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white hover:text-purple-300 cursor-pointer transition-colors duration-300 px-3 py-2 rounded-lg"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
