import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CertificateModal({ certificate, onClose }) {
  return (
    <AnimatePresence>
      {certificate && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.button
            className="absolute top-5 right-5 text-black text-4xl"
            onClick={onClose}
            whileHover={{ scale: 1.2 }}
          >
            ×
          </motion.button>
          <motion.img 
            src={certificate}
            alt="Certificate"
            className="max-w-4xl w-full max-h-[80vh] object-contain"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}