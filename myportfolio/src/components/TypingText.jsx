import React, { useEffect, useState } from 'react';

const TypingText = ({ text = '', startDelay = 1000, speed = 50, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!text) return; // Evitar errores si text es undefined

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex > text.length) {
            clearInterval(interval);
            return prevIndex;
          }
          return nextIndex;
        });
      }, speed);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, startDelay, speed]);

  useEffect(() => {
    if (text) {
      setDisplayedText(text.slice(0, currentIndex));
    }
  }, [currentIndex, text]);

  return (
    <p className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default TypingText;
