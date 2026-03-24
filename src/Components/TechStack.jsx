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
        { name: 'JavaScript', icon: jsIcon, },
        { name: 'C#', icon: cIcon, },
        { name: 'Python', icon: pythonIcon, }
      ]
    },
    {
      category: 'Frontend',
      items: [
        { name: 'JavaScript', icon: jsIcon,  },
        { name: 'React', icon: reactIcon,  },
        { name: 'TypeScript', icon: tsIcon, },
        { name: 'Tailwind CSS', icon: tailwindIcon,  },
        { name: 'Bootstrap', icon: bootstrapIcon, }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Laravel', icon: laravelIcon, },
        { name: 'ASP.NET', icon: aspnetIcon, },
        { name: 'PHP', icon: phpIcon, }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MySQL', icon: mysqlIcon, },
        { name: 'SQL Server', icon: sqlIcon, },
      ]
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-12 border-t border-white/[0.06] bg-zinc-950/50">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90 bg-cyan-500/[0.08] border border-cyan-500/20">
            Tech Stack
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Full Stack Development Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto px-2 leading-relaxed">
            Mastery across the entire development stack with proven technologies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/[0.02] p-6 shadow-xl transition duration-300 border border-white/[0.08] hover:border-cyan-500/25 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.2)] w-full"
            >
              <h3 className="text-center text-base sm:text-lg font-semibold text-white mb-6">
                {tech.category}
              </h3>

              <div className="flex flex-col space-y-3 items-start">
                {tech.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center w-full p-3 rounded-xl hover:bg-white/[0.04] transition-colors text-white duration-200 border border-transparent hover:border-white/[0.06]"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-8 h-8 sm:w-9 sm:h-9 mr-3 object-contain"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-zinc-100 text-sm sm:text-base truncate">{item.name}</h4>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-cyan-400/60 shrink-0" aria-hidden />
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
