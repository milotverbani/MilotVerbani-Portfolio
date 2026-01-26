import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const links = [
    { name: "Home", id: "home"},
    { name: "About", id: "about"},
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 opacity-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* LEFT */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold italic">MILOT VERBANI</h3>
            <p className="text-gray-300">
              BSc in Computer Science · Full-Stack Software Developer with 4+ years of experience building modern, scalable web applications.
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/milot-verbani-4371232b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="https://github.com/milotverbani"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.facebook.com/milot.vr.2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>

          {/* CENTER */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {links.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact</h4>
            <p className="text-gray-300">
              Email:{" "}
              <a
                href="mailto:milot.verbani233@gmail.com"
                className="hover:text-white transition-colors"
              >
                milot.verbani233@gmail.com
              </a>
            </p>
            <p className="text-gray-300">
              Phone:{" "}
              <a
                href="tel:+38349329546"
                className="hover:text-white transition-colors"
              >
                +383 49 329 546
              </a>
            </p>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Milot Verbani. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
