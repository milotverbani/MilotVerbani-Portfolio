import React from 'react';
import Marquee from 'react-fast-marquee';
import laravel from '/images/laravel.png';
import js from '/images/js.webp';
import Reactt from '/images/React.webp';
import php from '/images/php.png';
import c from '/images/c.png';
import python from '/images/python.png';
import mysql from '/images/mysql.png';
import aspnetIcon from '/images/netb.png';
import sqlIcon from '/images/sq.png';



function Marqueeslider() {
  return (
    <div className='  mt-10'>
      <div className="block  md:justify-evenly overflow-hidden">
        <h1 className="text-2xl text-white pl-8 md:pl-[100px] text-center mb-5">My Technologies</h1>
        <div className="w-full md:w-[1420px] md:ml-[100px] ml-4">
          <Marquee speed={25} gradient={false}>
            <div className="flex gap-[50px] w-full ">
              <img src={laravel} alt="Laravel" className="w-[50px] sm:w-[60px] md:w-[60px] md:h-[60px]" />
              <img src={js} alt="JavaScript" className="w-[50px] sm:w-[60px] md:w-[60px] md:h-[60px]" />
              <img src={php} alt="PHP" className="w-[50px] sm:w-[60px] md:w-[60px] md:h-[60px]" />
              <img src={Reactt} alt="React" className="w-[50px] sm:w-[60px] md:w-[60px] md:h-[60px]" />
              <img src={c} alt="C" className="w-[50px] sm:w-[60px] md:w-[60px] md:h-[60px]" />
              <img src={aspnetIcon} alt="ASP.NET" className="w-[50px] sm:w-[60px] md:w-[90px] md:h-[70px]" />
              <img src={python} alt="Python" className="w-[50px] sm:w-[60px] md:w-[60px] md:h-[60px]" />
              <img src={mysql} alt="MySQL" className="w-[50px] mr-10 md:mr-0 sm:w-[60px] md:w-[60px] md:h-[60px]" />
              <img src={sqlIcon} alt="SQL Server" className="w-[50px] mr-10 md:mr-0 sm:w-[60px] md:w-[60px] md:h-[60px]" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default Marqueeslider