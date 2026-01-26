import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="relative w-full">
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
          
          {/* LOGO */}
          <h1
            onClick={() => handleScroll("home")}
            className="cursor-pointer text-white text-2xl font-bold drop-shadow-lg"
          >
            MILOT <span className="text-blue-500">VR</span>
          </h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex space-x-8">
            {links.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="text-white cursor-pointer hover:text-blue-500 transition-colors duration-300"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </nav>

        {/* UNDERLINE */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <ul className="md:hidden fixed top-[72px] left-0 w-full bg-black/90 backdrop-blur-lg p-6 flex flex-col space-y-4 z-40">
          {links.map((link, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleScroll(link.id)}
                className="w-full text-left text-white hover:text-blue-400 transition-colors duration-300 px-3 py-2 rounded-lg"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
