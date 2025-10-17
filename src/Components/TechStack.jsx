import React from 'react';
import jsIcon from '/images/js.webp';
import cIcon from '/images/c.png';
import pythonIcon from '/images/python.png';
import reactIcon from '/images/React.webp';
import tailwindIcon from '/images/tailwind.png';
import bootstrapIcon from '/images/bootstrap.webp';
import laravelIcon from '/images/laravel.png';
import aspnetIcon from '/images/logonet.png';
import phpIcon from '/images/php.png';
import mysqlIcon from '/images/mysql.png';
import sqlIcon from '/images/sql.png';
import tsIcon from '/images/ts.png';

const TechStack = () => {
  const technologies = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'JavaScript', icon: jsIcon, experience: '2+ years' },
        { name: 'C#', icon: cIcon, experience: '3+ years' },
        { name: 'Python', icon: pythonIcon, experience: '1+ years' }
      ]
    },
    {
      category: 'Frontend',
      items: [
        { name: 'JavaScript', icon: jsIcon, experience: '2+ years' },
        { name: 'React', icon: reactIcon, experience: '2+ years' },
        { name: 'TypeScript', icon: tsIcon, experience: '1+ years' },
        { name: 'Tailwind CSS', icon: tailwindIcon, experience: '3+ years' },
        { name: 'Bootstrap', icon: bootstrapIcon, experience: '3+ years' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Laravel', icon: laravelIcon, experience: '2+ years' },
        { name: 'ASP.NET', icon: aspnetIcon, experience: '3+ years' },
        { name: 'PHP', icon: phpIcon, experience: '2+ years' }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MySQL', icon: mysqlIcon, experience: '2+ years' },
        { name: 'SQL Server', icon: sqlIcon, experience: '3+ years' },
      ]
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-12 ">
      <div className="w-full">
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 bg-gradient-to-br from-[#0a0b1e] via-[#0e1447] to-[#1a0f2e] text-white  rounded-full text-sm font-bold shadow-lg">
            Tech Stack
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white">
            Full Stack Development Expertise
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-2">
            Mastery across the entire development stack with proven technologies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gradient-to-br from-[#1f1b3a] to-[#141629] 
                         p-6 shadow-xl hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] 
                         transition duration-300 border border-[#2a2650] w-full"
            >
              <h3 className="text-center text-lg sm:text-xl font-bold text-white mb-6">
                {tech.category}
              </h3>
              
              <div className="flex flex-col space-y-5 items-start">
                {tech.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center w-full p-3 rounded-lg 
                               hover:bg-[#2d2a4a] transition-colors text-white duration-200"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 mr-3 object-contain"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-white">{item.name}</h4>
                      <p className="text-sm text-white">{item.experience}</p>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
