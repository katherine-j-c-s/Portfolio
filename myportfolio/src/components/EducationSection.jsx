import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EducationSection({ educationInfo, onOpenCertificate }) {
  const [showEducationInfo, setShowEducationInfo] = useState(null);
  
  // Manejador para mostrar información educativa
  const handleEducationInfo = (name) => {
    setShowEducationInfo(name);
  };

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col items-center justify-start h-full max-w-5xl mx-auto pb-12"
    >
      <div className="w-full grid gap-6">
        {educationInfo.info.map((edu, i) => (
          <motion.div 
            key={i}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <motion.div 
              className="bg-[#19173d] rounded-lg p-6 border-l-4 border-[#DA0BFF]"
              onMouseEnter={() => handleEducationInfo(edu.name)}
              onMouseLeave={() => handleEducationInfo(null)}
              whileHover={{ x: 10, boxShadow: "0 10px 25px -5px rgba(218, 11, 255, 0.2)" }}
            >
              <h3 className="text-xl md:text-2xl font-mono mb-2">
                {edu.name.toUpperCase()}
              </h3>
              
              <AnimatePresence>
                {showEducationInfo === edu.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col md:flex-row justify-between mt-4">
                      <h4 className="text-xl md:text-2xl text-[#DA0BFF] font-bold">
                        {edu.academy}
                      </h4>
                      {edu.certificate ? (
                        <button
                          onClick={() => onOpenCertificate(edu.certificate)}
                          className="text-white bg-transparent border-s-2 border-[#DA0BFF] border-solid hover:text-[#DA0BFF] mt-2 md:mt-0 text-base cursor-pointer hover:underline transition-all"
                        >
                          {educationInfo.Certificate}
                        </button>
                      ) : edu.note ? (
                        <span className="text-gray-300 mt-2 md:mt-0 text-sm">
                          {edu.note}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-4 text-base md:text-lg">{edu.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}