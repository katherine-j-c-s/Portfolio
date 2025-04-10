import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export const NavDot = ({ to, isActive, onClick, progress }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={0}
      duration={800}
      onClick={onClick}
      className="w-full"
    >
      <motion.div 
        className="h-1 bg-[#2A2550] cursor-pointer rounded-r-full"
        animate={{
          width: `${progress}%`
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-[#DA0BFF] rounded-r-full"
          initial={{ width: 0 }}
          animate={{ width: isActive ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  );
};