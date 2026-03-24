
import React from "react";
import CountUp from "react-countup";
import linkedinIcon from "/images/in.png";
import githubIcon from "/images/git.png";
import facebookIcon from "/images/fcb.png";
import milotme from "/images/milotme.jpg";
import ChromaGrid from '../Components/ChromaGrid.jsx'
import ShinyText from "../Components/ShinyText.jsx";
 import { motion } from "framer-motion";
 import TechStack from "../Components/TechStack.jsx";

function AboutMe() {
  const socialIcons = [
    { href: "https://www.linkedin.com/in/milot-verbani-4371232b1/", src: linkedinIcon },
    { href: "https://github.com/milotverbani", src: githubIcon },
    { href: "https://www.facebook.com/milot.vr.2025/", src: facebookIcon },
  ];
  const items = [
  {
    image: milotme,
    title: "Milot Verbani",
    subtitle: "Software Developer",
    handle: "@milotverbani",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #EF4444, #000)",
  }
];

  return (
    <section
      id="about"
      className="relative text-white bg-zinc-950 py-20 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 0% 40%, rgba(34, 211, 238, 0.08), transparent), radial-gradient(ellipse 50% 40% at 100% 80%, rgba(59, 130, 246, 0.06), transparent)",
        }}
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        <div className="space-y-8 pt-5">
          <div className="inline-flex items-center bg-cyan-500/[0.08] px-4 py-2 rounded-full border border-cyan-500/20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
              About Me
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            Your Vision. Our Expertise.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-500">
              Your Success.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            I’m BSc. Milot Verbani, a passionate software developer with a
            background in Computer Science. I have successfully completed a
            Full-Stack Web Developer course and hold a Bachelor’s degree in
            Computer Science. With 3 years of hands-on experience in both
            frontend and backend development, I enjoy building modern,
            functional, and scalable web applications. Always eager to learn and
            take on new challenges, I strive to turn ideas into impactful
            digital solutions.
          </p>
          <a href="#projects">
            <motion.div
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group text-base sm:text-lg cursor-pointer relative inline-flex h-[44px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] px-4 sm:px-6 font-medium text-zinc-200 hover:border-cyan-500/30 transition"
          >
            <span className='p-2 sm:p-4'>
              <ShinyText text="MY PROJECTS" disabled={false} speed={3} />
            </span>
            <div className="absolute inset-0 flex h-full w-full justify-center transform group-hover:duration-1000 group-hover:translate-x-full group-hover:skew-x-[-12deg] -translate-x-full skew-x-[-12deg]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </motion.div>
        </a>
          <div className="grid grid-cols-2 gap-6 mt-8">
            {[
              { value: 20, label: "Projects", suffix: "+" },
              { value: 4, label: "Years", suffix: "+" }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/[0.03] p-5 rounded-xl border border-white/[0.08] hover:border-cyan-500/25 transition-all"
              >
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">
                  <CountUp end={stat.value} duration={3} suffix={stat.suffix} />
                </p>
                <p className="text-zinc-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-5 mt-6 mb-4">
            {socialIcons.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/[0.03] flex items-center justify-center w-14 h-14 rounded-xl border border-white/[0.08] hover:border-cyan-500/30 transition-all"
              >
                <img
                  src={social.src}
                  alt="social"
                  className="rounded-full w-8 h-8 object-cover"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="relative  overflow-hidden shadow-2xl ">
             <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
              
            </div>
          </div>
        </div>
      </div>
    <TechStack/>
   
    </section>
  );
}

export default AboutMe;
