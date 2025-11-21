import React from 'react'
import FuzzyText from '../Components/FuzzyText.jsx';

function Changes() {
  const hoverIntensity = 0.3; 
  const enableHover = true;

  return (
    <div className='bg-black w-full h-screen flex justify-center items-center px-4 text-center'>
      <FuzzyText
        className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold"
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
      >
        THIS PAGE IS BEING REDESIGNED
      </FuzzyText>
    </div>
  )
}

export default Changes;
