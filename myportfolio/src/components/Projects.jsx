import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Appear } from './Appear';
import { Reveal } from './Reveal';

export default function Projects({ info }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showMiniProjects, setShowMiniProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openLinkInNewTab = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleMiniProjectsClick = (project) => {
    setSelectedProject(project);
    setShowMiniProjects(true);
  };

  const closeMiniProjects = () => {
    setShowMiniProjects(false);
    setSelectedProject(null);
  };

  return (
    <div id={info.id} className="w-full bg-black py-16 min-h-screen relative">
      {/* Título de sección con el mismo estilo que tenías antes */}
      <Reveal>
        <div className="md:w-fit md:ml-52 w-full md:text-left text-center">
          <h1 className="font-bold md:text-5xl text-3xl text-white">{info.Title}</h1>
          <div className="bg-[#DA0BFF] h-1 md:w-96 w-44 mt-6 md:mx-0 mx-auto"></div>
        </div>
      </Reveal>

      {/* Contenedor principal de proyectos - ajustado para mejor visualización en PC */}
      <div className="container mx-auto mt-20 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {info.projects.map((project, index) => (
            <Appear key={index}>
              <motion.div
                className="relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-lg shadow-[#DA0BFF]/20"
                onHoverStart={() => handleCardHover(index)}
                onHoverEnd={() => handleCardHover(null)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => project.miniProjects ? handleMiniProjectsClick(project) : openLinkInNewTab(project.link)}
              >
                {/* Card Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Información siempre visible - gradient overlay en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#110E2F] to-transparent p-6">
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                </div>
                
                {/* Overlay completo en hover */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div 
                      className="absolute inset-0 bg-[#110E2F] bg-opacity-90 p-6 flex flex-col justify-between"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
                        <p className="text-gray-300">{project.detail}</p>
                      </div>
                      
                      <motion.button
                        className={`mt-4 py-3 px-6 rounded-md ${project.miniProjects ? 'bg-indigo-600' : 'bg-[#DA0BFF]'} text-white font-medium`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {project.miniProjects ? 'Ver Mini Proyectos' : info.More}
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Appear>
          ))}
        </div>
      </div>

      {/* Modal para Mini Proyectos - mejorado para PC */}
      <AnimatePresence>
        {showMiniProjects && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 md:p-8 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMiniProjects}
          >
            <motion.div 
              className="bg-[#110E2F] rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto p-6 md:p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
                <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                <button 
                  onClick={closeMiniProjects}
                  className="text-gray-400 hover:text-white text-3xl transition-colors"
                >
                  &times;
                </button>
              </div>
              
              <p className="text-gray-300 mb-8 max-w-4xl">{selectedProject.detail}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedProject.miniProjects && selectedProject.miniProjects.map((miniProject, idx) => (
                  <motion.div
                    key={idx}
                    className="relative rounded-xl overflow-hidden h-64 shadow-lg shadow-[#DA0BFF]/10"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgba(218, 11, 255, 0.3), 0 10px 10px -5px rgba(218, 11, 255, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={() => openLinkInNewTab(miniProject.link)}
                  >
                    <img 
                      src={miniProject.image} 
                      alt={miniProject.title} 
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#110E2F] via-[#110E2F]/70 to-transparent p-5 flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white mb-2">{miniProject.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{miniProject.detail}</p>
                      <motion.button
                        className="py-2 px-4 rounded-md bg-[#DA0BFF] text-white font-medium text-sm self-start"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {info.More}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}