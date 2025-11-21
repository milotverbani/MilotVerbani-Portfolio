import React from 'react';
import { motion } from "framer-motion";
import Marqueeslider from '../Components/Marqueeslider.jsx';
// import milotCV from '../Components/CV-MilotVerbani.pdf'; 
import ShinyText from '../Components/ShinyText.jsx';
import TrueFocus from '../Components/TrueFocus.jsx';
import Orb from '../Components/Orb.jsx';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <section 
      id='home'
      className="relative bg-black flex flex-col justify-center items-center min-h-screen overflow-hidden"
    >
     
      <div className="absolute inset-0 z-20">
        <Orb
          hoverIntensity={4.5}
          rotateOnHover={true}
          hue={2}
          forceHoverState={false}
        />
      </div>

   
      <div className="relative z-20 text-white pt-[150px] sm:pt-[180px] md:pt-[220px] lg:pt-[250px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-24">

      
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center"
        >
          <TrueFocus 
            sentence="MILOT VERBANI"
            manualMode={false}
            blurAmount={5}
            borderColor="blue"
            animationDuration={2}
            pauseBetweenAnimations={2}
          />
        </motion.div>

        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className='w-[380px] p-2 sm:w-[500px] md:w-[800px] lg:w-[900px] font-mono text-center mt-4 text-base sm:text-lg relative z-0'
        >
          “BSc. Milot Verbani – full-stack software developer with experience in both frontend and backend. Motivated and always ready for new projects and exciting challenges.”
        </motion.p>

       
        <div className='flex sm:flex-row gap-3 sm:gap-4 mt-6 relative z-30'>
          
            <Link to="/AboutMe">
            <motion.div
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group text-base sm:text-lg cursor-pointer relative inline-flex h-[40px] items-center justify-center overflow-hidden rounded-md bg-slate-950 px-4 sm:px-6 font-medium text-neutral-200 transition"
          >
            <span className='p-2 sm:p-4'>
              <ShinyText text="About Me" disabled={false} speed={3} />
            </span>
            <div className="absolute inset-0 flex h-full w-full justify-center transform group-hover:duration-1000 group-hover:translate-x-full group-hover:skew-x-[-12deg] -translate-x-full skew-x-[-12deg]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </motion.div>
        </Link>

       
          <motion.a
            href={milotCV}
            download
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group text-base sm:text-lg cursor-pointer relative inline-flex h-[40px] items-center justify-center overflow-hidden rounded-md bg-slate-950 px-4 sm:px-6 font-medium text-neutral-200 transition"
          >
            <span className='p-2 sm:p-4'>
              <ShinyText text="MY CV" disabled={false} speed={3} />
            </span>
            <div className="absolute inset-0 flex h-full w-full justify-center transform group-hover:duration-1000 group-hover:translate-x-full group-hover:skew-x-[-12deg] -translate-x-full skew-x-[-12deg]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </motion.a>
        </div>

   
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className='mt-8 w-full relative z-20'
        >
          <Marqueeslider/>
        </motion.div>
      </div>
    </section>
    </>
  );
}

export default Home;
