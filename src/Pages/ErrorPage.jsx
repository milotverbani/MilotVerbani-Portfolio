import React from 'react'
import FuzzyText from '../Components/FuzzyText.jsx';
import { Link } from 'react-router-dom';
import ShinyText from '../Components/ShinyText.jsx';

const hoverIntensity = 0.3; 
const enableHover = true;

function ErrorPage() {
  return (
    <div className="bg-zinc-950 min-h-[calc(100vh-4rem)] w-full flex justify-center items-center flex-col gap-8 px-4 py-20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(34, 211, 238, 0.12), transparent)' }} aria-hidden />
      <FuzzyText 
      fontSize="3rem"
      className="relative z-10"
        baseIntensity={0.2} 
        hoverIntensity={hoverIntensity} 
        enableHover={enableHover}
      >
        404
      </FuzzyText>
      <FuzzyText 
      fontSize="3.5rem"
      className="relative z-10"
        baseIntensity={0.2} 
        hoverIntensity={hoverIntensity} 
        enableHover={enableHover}
      >
        NOT FOUND
      </FuzzyText>
        <Link to="/" className="relative z-10">
            <div
            className="group text-base sm:text-lg cursor-pointer relative inline-flex h-[44px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] px-4 sm:px-6 font-medium text-zinc-200 hover:border-cyan-500/30 transition"
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
