import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export const AnimatedUnderlineLink = ({ to, activeClass, isActive, children, onClick }) => {
  return (
    <div className="relative group cursor-pointer">
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
        onClick={onClick}
        className={`relative block py-2 transition-colors duration-300 ${isActive ? 'text-[#DA0BFF]' : 'text-[#D9D9D9] hover:text-white'}`}
      >
        {children}
      </Link>

      {/* Always visible underline for active item */}
      {isActive && (
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-[#DA0BFF]"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}

      {/* Hover underline that appears from left and disappears to right */}
      {!isActive && (
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-[#DA0BFF] origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          exit={{ scaleX: 0, originX: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}
    </div>
  );
};