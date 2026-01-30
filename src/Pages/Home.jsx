import React from 'react';
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Download, 
  Sparkles, 
  Code2, 
  Cpu, 
  Database,
  Globe,
  Terminal
} from 'lucide-react';
import Marqueeslider from '../Components/Marqueeslider.jsx';
import ShinyText from '../Components/ShinyText.jsx';
import TrueFocus from '../Components/TrueFocus.jsx';
import FloatingLines from '../Components/FloatingLines.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import Contact from '../Components/Contact.jsx';

// Tech Icons for the orbit
import { 
  SiReact, 
  SiLaravel, 
  SiDotnet, 
  SiTypescript, 
  SiPython,
  SiJavascript,
  SiPhp,
  SiMysql,
} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";

function Home() {
  const techOrbitItems = [
    { Icon: SiReact, label: 'React', color: '#61DAFB' },
    { Icon: SiLaravel, label: 'Laravel', color: '#FF2D20' },
    { Icon: SiDotnet, label: '.NET', color: '#512BD4' },
    { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
    { Icon: SiPython, label: 'Python', color: '#3776AB' },
    { Icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
    { Icon: SiPhp, label: 'PHP', color: '#777BB4' },
    { Icon: SiMysql, label: 'MySQL', color: '#4479A1' },
    { Icon: TbBrandCSharp, label: 'C#', color: '#239120' },
  ];

  const stats = [
    { value: '4+', label: 'Years Experience', icon: <Terminal className="w-5 h-5" /> },
    { value: '50+', label: 'Projects', icon: <Code2 className="w-5 h-5" /> },
    { value: '∞', label: 'Solutions', icon: <Cpu className="w-5 h-5" /> },
    { value: '100%', label: 'Commitment', icon: <Sparkles className="w-5 h-5" /> },
  ];
  

  return (
    <>
      <section 
        id='home'
        className="relative bg-black flex flex-col justify-center items-center min-h-screen overflow-hidden"
      >
        {/* Background - Keeping your FloatingLines */}
        <div className="absolute inset-0 z-0">
          <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <FloatingLines 
              enabledWaves={["top","middle","bottom"]}
              lineCount={5}
              lineDistance={5}
              bendRadius={5}
              bendStrength={-0.5}
              interactive={true}
              parallax={true}
            />
          </div>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black z-10" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 z-5 opacity-10">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-5">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              initial={{ 
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh',
                opacity: 0
              }}
              animate={{
                y: [null, Math.random() * -100, Math.random() * 100],
                x: [null, Math.random() * -50, Math.random() * 50],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          
          {/* Main Content Container */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-150" />
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-300" />
                </div>
                <span className="text-sm font-medium text-gray-300 tracking-wider">
                  FULL-STACK DEVELOPER
                </span>
              </motion.div>

              {/* Main Title with gradient */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                    MILOT
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                    VERBANI
                  </span>
                </h1>
                
                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '200px' }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                />
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light max-w-xl"
              >
                Crafting digital experiences with clean code and innovative solutions. 
                Specialized in modern web technologies with <span className="text-cyan-300">4+ years</span> of full-stack development experience.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
              >
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="group relative p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                {/* About Me Button */}
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-xl overflow-hidden bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 backdrop-blur-sm"
                >
                  <div className="relative flex items-center justify-center gap-3">
                    <span className="text-lg font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                      Explore Me
                    </span>
                    <ChevronRight className="w-5 h-5 text-cyan-300 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.a>

                {/* CV Download Button */}
                <motion.a
                  href="/CV-Milot Verbani.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all"
                >
                  <div className="relative flex items-center justify-center gap-3">
                    <Download className="w-5 h-5 text-gray-300" />
                    <span className="text-lg font-semibold text-gray-300">
                      Download CV
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Tech Orbit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[500px]  flex items-center justify-center"
            >
              {/* Central Orb */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                className="absolute w-32 h-32 rounded-full bg-gradient-to-br md:ml-[-80px] lg:ml-[-60px] from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">MV</div>
                  <div className="text-xs text-cyan-300 mt-1">DEV</div>
                </div>
                
                {/* Inner rotating ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-[-10px] border-2 border-dashed border-cyan-500/30 rounded-full"
                />
              </motion.div>

              {/* Orbiting Tech Icons */}
              {techOrbitItems.map((tech, index) => {
                const angle = (index / techOrbitItems.length) * Math.PI * 2;
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={tech.label}
                    className="absolute"
                    style={{ left: `calc(40% + ${x}px)`, top: `calc(43% + ${y}px)` }}
                    animate={{
                      rotate: -360,
                      x: [0, Math.cos(angle + 0.1) * radius - x, 0],
                      y: [0, Math.sin(angle + 0.1) * radius - y, 0],
                    }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      x: {
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.1
                      },
                      y: {
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.1
                      }
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group relative p-4 rounded-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                      style={{ color: tech.color }}
                    >
                      <tech.Icon className="w-8 h-8" />
                      
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        <div className="px-3 py-1.5 rounded-lg bg-black/90 backdrop-blur-sm border border-white/10">
                          <span className="text-xs font-medium text-white">{tech.label}</span>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-r border-b border-white/10" />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-[460px] lg:ml-[-60px] md:ml-[-100px] h-[460px] border border-white/10 rounded-full"
              >
                {[...Array(36)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                    style={{
                      left: `${50 + 45 * Math.cos((i * 10 * Math.PI) / 180)}%`,
                      top: `${50 + 45 * Math.sin((i * 10 * Math.PI) / 180)}%`,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm text-gray-400 tracking-wider">SCROLL</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <Marqueeslider />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;