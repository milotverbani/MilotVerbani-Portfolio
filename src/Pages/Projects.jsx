import React, { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

// Images remain the same
import onlineShopImg from '/images/onlineshop.png';
import leartiParkImg from '/images/lp.jpg';
import reactOnlineShopImg from '/images/reactonlineshop.webp';
import fastFoodImg from '/images/milotfasfood.jpg';
import phpFotballImg from '/images/phpfotball.png';
import rentCarImg from '/images/onlinerent.jpg';
import jobsportalimg from '/images/jobportal.png';
import carsale from '/images/carsale.jpg';
import bus from '/images/bus.jpg';
import pythonai from '/images/python.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint is 768px
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Kept your exact data structure
  const projects = [
    {
      id: 1,
      title: "Online Shop",
      description: "A comprehensive online shop built with HTML, Tailwind CSS, and JavaScript. Features user authentication.",
      tags: ["HTML", "TailwindCss", "JavaScript"],
      image: onlineShopImg,
      githubLink: "#",
    },
    {
      id: 2,
      title: "Learti Park",
      description: "Modern website for Learti Park developed using HTML, Bootstrap, and JavaScript. Showcases responsive design.",
      tags: ["HTML", "Bootstrap", "JavaScript"],
      image: leartiParkImg,
      githubLink: "https://github.com/milotverbani/LeartiPark",
      liveLink: "https://leartipark.com/"
    },
    {
      id: 3,
      title: "OnlineShop ReactJs",
      description: "Advanced e-commerce platform with ReactJS featuring user authentication, shopping cart, and admin panel.",
      tags: ["React", "TailwindCss"],
      image: reactOnlineShopImg,
      githubLink: "https://github.com/milotverbani/ReactJs-OnlineShop",
      liveLink: "#"
    },
    {
      id: 4,
      title: "Fast Food",
      description: "A modern Fast Food web application built with ReactJS, featuring an interactive menu and dynamic cart.",
      tags: ["React", "TailwindCss"],
      image: fastFoodImg,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 5,
      title: "Fotball Reservation PHP",
      description: "Football pitch reservation system with PHP backend allowing users to book pitches and manage reservations.",
      tags: ["PHP" , "Mysql"],
      image: phpFotballImg,
      githubLink: "https://github.com/milotverbani/PHP-Project",
      liveLink: "#"
    },
    {
      id: 6,
      title: "Rent a Car Laravel",
      description: "Full-stack car rental system built with Laravel, featuring vehicle management, booking system, and admin dashboard.",
      tags: ["Laravel" ,"Mysql"],
      image: rentCarImg,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 7,
      title: "Jobs Portal",
      description: "JobsPortal is a modern web application designed to help users quickly and efficiently find the right professionals.",
      tags: ["React" ,"Aspnet" ,"Sql Server"  ],
      image: jobsportalimg,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 8,
      title: "Automotive Sales & Inventory Platform",
      description: "Full-stack system for car sales and inventory with RESTful API",
      tags: ["React" , "Aspnet" , "Sql Server"],
      image: carsale,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 9,
      title: "Bus Booking System",
      description: "Full-stack system for bus booking and management with ASP NET Core",
      tags: ["Aspnet" , "Sql Server"],
      image: bus,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 10,
      title: "Python AI Project",
      description: "An AI project built with Python and TensorFlow, featuring machine learning models and data visualization.",
      tags: ["Python", "TensorFlow", "Machine Learning"],
      image: pythonai,
      githubLink: "#",
      liveLink: "#"
    },
  ];

  const filters = ['All', 'React', 'PHP', 'Laravel', 'JavaScript', 'Aspnet' , 'Python'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  /**
   * Helper function to determine grid spans based on index.
   * This creates the varied "masonry" look on desktop screens.
   */
  const getGridSpanClass = (index) => {
    // A repeating pattern of shapes for visual variety
    // On mobile (default), everything is 1 column.
    // On medium screens (md:), we apply the spans.
    const pattern = [
      'md:col-span-2 md:row-span-1', // Wide
      'md:col-span-1 md:row-span-1', // Standard Small
      'md:col-span-1 md:row-span-2', // Tall
      'md:col-span-2 md:row-span-2', // Big Square
      'md:col-span-1 md:row-span-1', // Standard Small
      'md:col-span-2 md:row-span-1', // Wide
      'md:col-span-1 md:row-span-1', // Standard Small
    ];
    // Use modulo to loop through the pattern based on the filtered index
    return pattern[index % pattern.length];
  };

  // Mobile link classes - always visible
  const mobileLinkClasses = "opacity-100 translate-y-0";

  // Desktop link classes - visible on hover
  const desktopLinkClasses = "opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out";

  return (
    <section id="projects" className="py-20 bg-[#0a0b1e]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
           <h2 className="text-4xl font-bold text-white mb-4">Project Gallery</h2>
           <p className="text-gray-400 max-w-xl mx-auto">A collection of my work, featuring varied technologies and varied layouts.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 flex-wrap gap-3">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Masonry Grid Container 
          - grid-cols-1 on mobile, 3 on desktop
          - auto-rows defined a base height for rows
          - grid-flow-dense helps pack items tightly if there are gaps
        */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6 grid-flow-dense"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => {
              // Determine the shape class based on its position in the filtered list
              const spanClass = getGridSpanClass(index);

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, type: 'spring', damping: 15 }}
                  // Combine base classes with the dynamic span class
                  className={`relative group rounded-2xl overflow-hidden bg-gray-900 shadow-xl ${spanClass}`}
                >
                  {/* Background Image - fills container and zooms on hover */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Dark Gradient Overlay - ensures text readability at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b1e] via-[#0a0b1ee6] to-transparent opacity-90"></div>

                  {/* Content Container - positioned at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-full pointer-events-none">
                    <div className="pointer-events-auto">
                        
                        {/* Tags - minimalist style */}
                        <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[11px] font-semibold uppercase tracking-wider text-blue-300 bg-blue-900/30 px-2 py-1 rounded-md backdrop-blur-sm border border-blue-500/20">
                            {tag}
                            </span>
                        ))}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                        {project.title}
                        </h3>
                        
                        {/* Description - truncated to 2 lines */}
                        <p className="text-gray-400 text-sm line-clamp-2 mb-4 group-hover:text-gray-300 transition-colors">
                        {project.description}
                        </p>

                        {/* Links Container - Fades in and moves up on hover */}
                        <div className={`flex items-center gap-4 pt-4 border-t border-gray-700/50 ${
                          isMobile ? mobileLinkClasses : desktopLinkClasses
                        }`}>
                            {project.githubLink && project.githubLink !== "#" ? (
                                <a 
                                  href={project.githubLink} 
                                  target="_blank" 
                                  rel="noreferrer" 
                                  className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <FiGithub size={18} /> 
                                  <span className="font-medium hidden sm:inline">Source</span>
                                  <span className="font-medium inline sm:hidden">Code</span>
                                </a>
                            ) : (
                                <span className="flex items-center gap-2 text-sm text-gray-600 cursor-not-allowed">
                                    <FiCode size={18} /> 
                                    <span className="hidden sm:inline">Private</span>
                                    <span className="inline sm:hidden">Priv</span>
                                </span>
                            )}

                            {project.liveLink && project.liveLink !== "#" ? (
                                <a 
                                  href={project.liveLink} 
                                  target="_blank" 
                                  rel="noreferrer" 
                                  className="flex items-center gap-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg ml-auto transition-colors shadow-lg shadow-blue-900/20"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <span className="hidden sm:inline">Live Demo</span>
                                  <span className="inline sm:hidden">Live</span>
                                  <FiExternalLink size={18} /> 
                                </a>
                            ) : project.githubLink && project.githubLink !== "#" ? (
                                // Show View Code button if there's no live link but there's GitHub link
                                <a 
                                  href={project.githubLink} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  className="flex items-center gap-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg ml-auto transition-colors shadow-lg shadow-blue-900/20"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <span className="hidden sm:inline">View Code</span>
                                  <span className="inline sm:hidden">Code</span>
                                  <FiCode size={18} />
                                </a>
                            ) : null}
                        </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;