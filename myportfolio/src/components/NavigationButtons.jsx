import React from 'react';
import { motion } from 'framer-motion';

export default function NavigationButtons({ sections, activeSection, onSectionChange }) {
  return (
    <div className="flex justify-center mb-10">
      {Object.entries(sections).map(([key, title]) => (
        <motion.button
          key={key}
          className={`px-6 py-3 mx-1 rounded-md text-xl font-semibold transition-all ${
            activeSection === key ? "bg-[#DA0BFF] text-white" : "bg-[#19173d] text-gray-300 hover:bg-[#271f5e]"
          }`}
          onClick={() => onSectionChange(key)}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          {title}
        </motion.button>
      ))}
    </div>
  );
}