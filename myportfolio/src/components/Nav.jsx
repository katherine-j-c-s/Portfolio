import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import logo from '../assets/k.png';
import iconLanguage from '../assets/world-wide-web.png';
import { AnimatedUnderlineLink } from './AnimatedUnderlineLink';
import { NavDot } from './NavDot';
import { Appear } from './Appear';

export default function Nav({ changeLanguage, info }) {
  const [showLang, setShowLang] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(info.items[0].id);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Handle screen size detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Handle scroll progress calculation and active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress as percentage
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / documentHeight) * 100;
      setScrollProgress(progress);
      
      // Find the section that's currently in view
      const scrollPositionForSection = window.scrollY + window.innerHeight / 3;
      
      for (const item of info.items) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPositionForSection >= offsetTop && scrollPositionForSection < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [info.items]);
  
  // Función para cambiar de idioma
  const toggleLanguage = () => {
    changeLanguage(info.language === "English" ? "Spanish" : "English");
    setShowLang(false);
  };
  
  // Función para abrir/cerrar el menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // Manejador de clic en items de navegación
  const handleNavClick = (id) => {
    setActiveSection(id);
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Progress Bar (fixed at top of screen) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#2A2550] z-50">
        <motion.div 
          className="h-full bg-[#DA0BFF]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <div className="fixed z-40 w-full h-24 flex justify-between items-center mt-1">
        {/* Background overlay for desktop */}
        <div className="bg-[#00000076] hidden md:block absolute z-10 h-full w-full opacity-50"></div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full justify-between items-center px-10 z-20">
          <Link
            to={info.items[0].id}
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            className="cursor-pointer"
          >
            <img src={logo} alt="logo" className="h-16"/>
          </Link>
          
          <div className="flex items-center">
            {info.items.map((item, i) => (
              <div key={i} className="mx-5">
                <AnimatedUnderlineLink
                  to={item.id}
                  isActive={activeSection === item.id}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.name}
                </AnimatedUnderlineLink>
              </div>
            ))}
            
            <div className="relative ml-8">
              <div 
                onClick={() => setShowLang(!showLang)}
                className="p-1 rounded-full cursor-pointer bg-[#D9D9D9] hover:-translate-y-2 transition-all"
              >
                <img src={iconLanguage} className="h-8 w-8" alt="language" />
              </div>
              
              <AnimatePresence>
                {showLang && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 py-2 px-4 bg-[#110E2F] rounded-lg shadow-lg"
                  >
                    <p 
                      onClick={toggleLanguage}
                      className="cursor-pointer hover:text-[#DA0BFF]"
                    >
                      {info.language === "English" ? "Spanish" : "Inglés"}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex w-full justify-between items-center z-30">
          {/* Mobile navigation menu */}
          <motion.div 
            className="fixed left-0 top-0 h-full flex items-center"
            animate={{
              width: menuOpen ? '50%' : 'auto',
              background: menuOpen 
                ? 'linear-gradient(to right, rgba(17, 14, 47, 1), rgba(17, 14, 47, 0))' 
                : 'transparent'
            }}
          >
            <motion.div
              className="flex flex-col items-center ml-4"
              animate={{
                x: menuOpen ? '50%' : 0
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Menu Button */}
              <motion.div 
                className="p-2 cursor-pointer mb-16 text-white"
                animate={{ rotate: menuOpen ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                onClick={toggleMenu}
              >
                {menuOpen ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
              </motion.div>
              
              {/* Section links when menu is open */}
              {menuOpen && (
                <div className="flex flex-col items-start">
                  <AnimatePresence>
                    {info.items.map((item, i) => (
                      <motion.div
                        key={i}
                        animate={{ x: 20 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                        >
                          <AnimatedUnderlineLink
                            to={item.id}
                            isActive={activeSection === item.id}
                            onClick={() => handleNavClick(item.id)}
                          >
                            {item.name}
                          </AnimatedUnderlineLink>
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          </motion.div>
          
          {/* Language selector fixed in the bottom right */}
          <div className="fixed bottom-6 right-6 z-50">
            <div 
              onClick={() => setShowLang(!showLang)}
              className="p-1 rounded-full cursor-pointer bg-[#D9D9D9] hover:scale-110 transition-all"
            >
              <img src={iconLanguage} className="h-8 w-8" alt="language" />
            </div>
            
            <AnimatePresence>
              {showLang && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full right-0 mb-2 py-2 px-4 bg-[#110E2F] rounded-lg shadow-lg"
                >
                  <p 
                    onClick={toggleLanguage}
                    className="cursor-pointer hover:text-[#DA0BFF] text-white whitespace-nowrap"
                  >
                    {info.language === "English" ? "Spanish" : "Inglés"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}