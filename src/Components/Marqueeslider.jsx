import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

// Images
import laravel from '/images/laravel.png';
import js from '/images/js.webp';
import Reactt from '/images/React.webp';
import php from '/images/php.png';
import c from '/images/c.png';
import python from '/images/python.png';
import mysql from '/images/mysql.png';
import aspnetIcon from '/images/netb.png';
import sqlIcon from '/images/sq.png';

const technologies = [
  { id: 1, name: 'Laravel', img: laravel, color: '#FF2D20' },
  { id: 2, name: 'JavaScript', img: js, color: '#F7DF1E' },
  { id: 3, name: 'React', img: Reactt, color: '#61DAFB' },
  { id: 4, name: 'PHP', img: php, color: '#777BB4' },
  { id: 5, name: 'C#', img: c, color: '#239120' },
  { id: 6, name: 'ASP.NET', img: aspnetIcon, color: '#512BD4' },
  { id: 7, name: 'Python', img: python, color: '#3776AB' },
  { id: 8, name: 'MySQL', img: mysql, color: '#4479A1' },
  { id: 9, name: 'SQL Server', img: sqlIcon, color: '#CC2927' },
];

function Marqueeslider() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-x-hidden">

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating particles – FIXED (no vw overflow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth * 0.9,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
            }}
            animate={{
              x: ['-10%', '10%'],
              y: ['-10%', '10%'],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-2 mb-4 rounded-full bg-white/5 border border-white/10 text-sm tracking-widest text-cyan-400">
            TECHNOLOGY STACK
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Tech I Work With
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Modern tools I use to build scalable, fast and clean applications
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <Marquee speed={45} gradient={false} pauseOnHover>
            <div className="flex items-center gap-14 px-10 py-10">
              {technologies.map((tech) => (
                <motion.div
                  key={tech.id}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                  className="flex flex-col items-center min-w-[100px]"
                >
                  <div className="relative h-24 w-24 flex items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="h-14 w-14 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
                    />
                  </div>

                  <span className="mt-4 text-sm text-gray-300 font-medium">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Footer badge */}
        <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
          <span className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-150" />
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-300" />
          </span>
          Continuously expanding tech stack
        </div>
      </div>
    </section>
  );
}

export default Marqueeslider;
