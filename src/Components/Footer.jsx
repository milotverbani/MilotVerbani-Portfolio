// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 animate-gradient-x opacity-90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
        
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white italic">MILOT VERBANI</h3>
            <p className="text-gray-300">
              Full-stack developer passionate about creating fluid, modern, and dynamic digital experiences.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/in/milot-verbani-4371232b1/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://github.com/milotverbani" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.facebook.com/milot.vr.2025/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>

       
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/AboutMe" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/Projects" className="hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/Contactme" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

        
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white mb-4">Contact Me</h4>
            <p className="text-gray-300">
              Email: <a href="mailto:milot.verbani233@gmail.com" className="hover:text-white transition-colors">milot.verbani233@gmail.com</a>
            </p>
            <p className="text-gray-300">
              Phone: <a href="tel:+383-049-329-546" className="hover:text-white transition-colors">+383-49-329-546</a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Milot Verbani. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
