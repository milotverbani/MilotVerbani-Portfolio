import React, { useState } from "react";
import { Menu, X } from "lucide-react";

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
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.06] bg-zinc-950/75 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/60">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3.5">
          <h1
            onClick={() => handleScroll("home")}
            className="cursor-pointer text-lg sm:text-xl font-semibold tracking-tight text-white"
          >
            MILOT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              VR
            </span>
          </h1>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((link, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => handleScroll(link.id)}
                  className="relative px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:scale-x-0 after:bg-cyan-400 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06] transition-colors"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[57px] z-40 border-b border-white/[0.06] bg-zinc-950/95 backdrop-blur-xl px-4 py-5 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]">
          <ul className="flex flex-col gap-1">
            {links.map((link, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => handleScroll(link.id)}
                  className="w-full text-left text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-colors duration-200 px-4 py-3 rounded-xl"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
