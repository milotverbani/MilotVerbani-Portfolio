import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';



import onlineShopImg from '/images/onlineshop.png';
import leartiParkImg from '/images/lp.jpg';
import reactOnlineShopImg from '/images/reactonlineshop.webp';
import fastFoodImg from '/images/milotfasfood.jpg';
import phpFotballImg from '/images/phpfotball.png';
import rentCarImg from '/images/onlinerent.jpg';
import jobsportalimg from '/images/jobportal.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Online Shop",
      description: "A comprehensive online shop built with HTML, Tailwind CSS, and JavaScript. Features user authentication and shopping cart with local storage persistence.",
      tags: ["HTML", "TailwindCss", "JavaScript"],
      image: onlineShopImg,
      githubLink: "#",
    },
    {
      id: 2,
      title: "Learti Park",
      description: "Modern website for Learti Park developed using HTML, Bootstrap, and JavaScript. Showcases responsive design and interactive elements.",
      tags: ["HTML", "Bootstrap", "JavaScript"],
      image: leartiParkImg,
      githubLink: "https://github.com/milotverbani/LeartiPark",
      liveLink: "https://leartipark.com/"
    },
    {
      id: 3,
      title: "OnlineShop ReactJs",
      description: "Advanced e-commerce platform with ReactJS featuring user authentication, shopping cart, and admin panel with local storage management",
      tags: ["HTML", "TailwindCss", "React"],
      image: reactOnlineShopImg,
      githubLink: "https://github.com/milotverbani/ReactJs-OnlineShop",
      liveLink: "#"
    },
    {
      id: 4,
      title: "Fast Food",
      description: "A modern Fast Food web application built with ReactJS, featuring an interactive menu, dynamic cart functionality, and smooth user experience. Customers can browse meals, add them to the cart, and place orders in an intuitive and responsive interface.",
      tags: ["HTML", "TailwindCss", "React"],
      image: fastFoodImg,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 5,
      title: "Fotball Reservation PHP",
      description: "Football pitch reservation system with PHP backend allowing users to book pitches and manage reservations through an intuitive interface.",
      tags: ["HTML", "TailwindCss", "PHP" , "Mysql"],
      image: phpFotballImg,
      githubLink: "https://github.com/milotverbani/PHP-Project",
      liveLink: "#"
    },
    {
      id: 6,
      title: "Rent a Car Laravel",
      description: "Full-stack car rental system built with Laravel, featuring vehicle management, booking system, and admin dashboard with MySQL database",
      tags: ["HTML", "TailwindCss", "Laravel" ,"Mysql"],
      image: rentCarImg,
      githubLink: "#",
      liveLink: "#"
    },
     {
      id: 7,
      title: "Jobs Portal",
      description: "JobsPortal is a modern web application designed to help users quickly and efficiently find the right professionals for any job. The platform connects job seekers with employers, streamlining the hiring process.",
      tags: ["HTML", "TailwindCss", "React" ,"Aspnet "  , "Sql server"],
      image: jobsportalimg,
      githubLink: "#",
      liveLink: "#"
    },
  ];

  const filters = ['All', 'React', 'PHP', 'Laravel', 'JavaScript' , 'Aspnet '];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50 bg-gradient-to-br from-[#0a0b1e] via-[#0e1447] to-[#1a0f2e]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
         My Projects
        </h2>
        <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here you can see some of my latest projects. Each project is an opportunity to learn something new.
        </p>
        
    
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 cursor-pointer py-2 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
     
        <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
          
                <div className="flex gap-4">
                  {project.githubLink && project.githubLink !== "#" ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FiGithub className="mr-2" /> Code
                    </a>
                  ) : (
                    <span className="flex items-center text-gray-500 dark:text-gray-500">
                      <FiGithub className="mr-2" /> Not Available
                    </span>
                  )}

                  {project.liveLink && project.liveLink !== "#" ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Live
                    </a>
                  ) : (
                    <span className="flex items-center text-gray-500 dark:text-gray-500">
                      <FiExternalLink className="mr-2" /> Not Available
                    </span>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
