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
    <footer className="relative overflow-hidden text-white border-t border-white/[0.06]">
      <div
        className="absolute inset-0 -z-10 bg-zinc-950"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(34, 211, 238, 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(59, 130, 246, 0.12), transparent)",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          <div className="space-y-5">
            <h3 className="text-lg font-semibold tracking-tight text-white">
              MILOT VERBANI
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              BSc in Computer Science · Full-Stack Software Developer with 4+ years of experience building modern, scalable web applications.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/milot-verbani-4371232b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://github.com/milotverbani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.facebook.com/milot.vr.2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.map((link, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => handleScroll(link.id)}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Contact
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Email:{" "}
              <a
                href="mailto:milot.verbani233@gmail.com"
                className="text-zinc-200 hover:text-cyan-400 transition-colors"
              >
                milot.verbani233@gmail.com
              </a>
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Phone:{" "}
              <a
                href="tel:+38349329546"
                className="text-zinc-200 hover:text-cyan-400 transition-colors"
              >
                +383 49 329 546
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.06] text-center text-zinc-500 text-xs">
          © {new Date().getFullYear()} Milot Verbani. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
