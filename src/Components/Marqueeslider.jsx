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
  { id: 1, name: 'Laravel', img: laravel },
  { id: 2, name: 'JavaScript', img: js },
  { id: 3, name: 'React', img: Reactt },
  { id: 4, name: 'PHP', img: php },
  { id: 5, name: 'C#', img: c },
  { id: 6, name: 'ASP.NET', img: aspnetIcon },
  { id: 7, name: 'Python', img: python },
  { id: 8, name: 'MySQL', img: mysql },
  { id: 9, name: 'SQL Server', img: sqlIcon },
];

function Marqueeslider() {
  return (
    <div className='relative w-full mt-[100px] py-10 overflow-hidden'>
      
      {/* Aesthetic Background glow for this section */}
      <div className="absolute inset-0 bg-blue-900/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        
        {/* Header Section */}
        <div className="text-center space-y-2 mb-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase"
          >
            Powering The Logic
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white font-mono"
          >
            Technologies
          </motion.h1>
        </div>

        {/* The Slider */}
        <div className="w-full max-w-[95%] xl:max-w-7xl mx-auto mask-gradient">
          <Marquee 
            speed={40} 
            gradient={true} 
            gradientColor={[0, 0, 0]} // Matches black background
            gradientWidth={100}
            pauseOnHover={true}
          >
            <div className="flex items-center gap-16 pr-16 py-8">
              {technologies.map((tech) => (
                <div 
                  key={tech.id} 
                  className="group relative flex flex-col items-center justify-center gap-4 cursor-pointer"
                >
                  {/* Icon Container */}
                  <div className="relative h-16 w-16 md:h-20 md:w-20 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                    
                    {/* The Image: Grayscale by default, Color on Hover */}
                    <img 
                      src={tech.img} 
                      alt={tech.name} 
                      className="h-full w-full object-contain filter grayscale opacity-60 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100" 
                    />
                    
                    {/* Reflection / Glow effect on hover */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 blur-xl rounded-full transition-opacity duration-300 group-hover:opacity-20" />
                  </div>

                  {/* Tooltip Name (Optional: Appears below on hover) */}
                  <span className="absolute -bottom-8 opacity-0 text-xs font-mono text-neutral-400 tracking-wider transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Marqueeslider;