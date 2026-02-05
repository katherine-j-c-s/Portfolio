import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Appear} from "./Appear"

// Star icons for skill ratings
import starEmpty from '../assets/starEmpti.png';
import start from '../assets/star.png';
import defaultSkillIcon from '../assets/world-wide-web.png';

export default function SkillsSection({ skillsInfo }) {
  const [showSkillDetail, setShowSkillDetail] = useState(null);

  const resolveIconSrc = (icon) => {
    if (!icon) return defaultSkillIcon;
    if (typeof icon === 'string') return icon;
    if (typeof icon === 'object' && typeof icon.default === 'string') return icon.default;
    return defaultSkillIcon;
  };
  
  // Manejador para mostrar detalles de habilidad
  const handleSkillDetail = (skill) => {
    setShowSkillDetail(skill === showSkillDetail ? null : skill);
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
  
  const skillIconVariants = {
    hover: { 
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };
  
  const stars = [1, 2, 3, 4, 5];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col items-center justify-start h-full max-w-5xl mx-auto"
    >
      <div className="w-full flex flex-wrap justify-center mt-5 gap-4">
        {skillsInfo.items.map((item, i) => (
          <motion.div
            key={i}
            className={`relative bg-[#19173d] rounded-lg border-2 ${
              showSkillDetail === item.title ? 'border-[#DA0BFF]' : 'border-[#333]'
            }`}
            onClick={() => handleSkillDetail(item.title)}
            whileHover="hover"
            variants={skillIconVariants}
          >
            <div className="p-4 flex flex-col items-center">
              <img 
                className="h-12 w-12 mb-2" 
                src={resolveIconSrc(item.icon)}
                alt={item.title} 
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = defaultSkillIcon;
                }}
              />
              <p className="text-sm font-medium">{item.title}</p>
              <Appear>
              <AnimatePresence>
                {showSkillDetail === item.title && (
                  <motion.div 
                    className="flex mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {stars.map((star, idx) => (
                        <img 
                          key={idx}
                          className="h-5 w-5 mx-0.5" 
                          src={star <= item.rate ? start : starEmpty} 
                          alt={star <= item.rate ? "filled star" : "empty star"} 
                        />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              </Appear>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}