import React from 'react';
import { motion } from 'framer-motion';
import { Appear } from './Appear';
import { Reveal } from './Reveal';

export default function AboutSection({ info }) {
  // Manejadores de eventos
  const handleOpenGmail = () => {
    const emailAddress = 'kathijcs@gmail.com';
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };
  
  const handleDownload = (path, pathName) => {
    const fileUrl = path;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `${pathName}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto"
    >
      <div className="w-full text-center">
        <Appear>
          <div className="flex justify-center mb-6">
            <div className="bg-[#DA0BFF] h-1 w-4 md:w-8 mt-3"></div>
            <p className="mx-3 text-base md:text-xl">{info.text}</p>
            <div className="bg-[#DA0BFF] h-1 w-4 md:w-8 mt-3"></div>
          </div>
        </Appear>
        
        <Appear>
          <div className="mb-6 text-center">
            <p className="my-5 text-base md:text-xl">{info.desc1}</p>
            <p className="text-base md:text-xl">{info.desc2}</p>
          </div>
        </Appear>
        
        <div className="flex justify-center mt-8">
          <Reveal>
            <div 
              onClick={handleOpenGmail} 
              className="flex mr-5 p-2 cursor-pointer border border-[#DA0BFF] transition-all hover:bg-[#DA0BFF] hover:-translate-y-2 justify-evenly rounded-md"
            >
              <p className="md:text-xl mr-2 w-fit text-base font-mono">{info.botons[0]}</p>
            </div>
          </Reveal>
          
          <Reveal>
            <div 
              onClick={() => handleDownload(info.cv, info.pathName)} 
              className="flex cursor-pointer p-2 border border-[#DA0BFF] bg-[#DA0BFF] hover:-translate-y-2 transition-all justify-evenly rounded-md"
            >
              <p className="md:text-xl mr-2 text-base font-mono">{info.botons[1]}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </motion.div>
  );
}