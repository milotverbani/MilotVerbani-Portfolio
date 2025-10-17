import React from 'react'
import FuzzyText from '../Components/FuzzyText.jsx';
import { Link } from 'react-router-dom';
import ShinyText from '../Components/ShinyText.jsx';

const hoverIntensity = 0.3; 
const enableHover = true;

function ErrorPage() {
  return (
    <div className='bg-black w-full h-[790px]  flex justify-center items-center flex-col gap-6'>
      <FuzzyText 
      fontSize="3rem"
        baseIntensity={0.2} 
        hoverIntensity={hoverIntensity} 
        enableHover={enableHover}
      >
        404
      </FuzzyText>
      <FuzzyText 
      fontSize="3.5rem"
        baseIntensity={0.2} 
        hoverIntensity={hoverIntensity} 
        enableHover={enableHover}
      >
        NOT FOUND
      </FuzzyText>
        <Link to="/">
            <div
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group text-base sm:text-lg cursor-pointer relative inline-flex h-[40px] items-center justify-center overflow-hidden rounded-md bg-slate-950 px-4 sm:px-6 font-medium text-neutral-200 transition"
          >
            <span className='p-2 sm:p-4'>
              <ShinyText text="GO HOME" disabled={false} speed={3} />
            </span>
            <div className="absolute inset-0 flex h-full w-full justify-center transform group-hover:duration-1000 group-hover:translate-x-full group-hover:skew-x-[-12deg] -translate-x-full skew-x-[-12deg]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </div>
        </Link>
    </div>
  )
}

export default ErrorPage
