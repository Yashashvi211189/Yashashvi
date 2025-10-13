import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing Hyperdrive...');

  const loadingMessages = [
    'Initializing Hyperdrive...',
    'Connecting to the Force...',
    'Loading Jedi Archives...',
    'Calibrating Lightsaber...',
    'Preparing for Battle...',
    'Galaxy Ready!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + Math.random() * 15, 100);
        
        // Update loading text based on progress
        const messageIndex = Math.floor((newProgress / 100) * (loadingMessages.length - 1));
        setLoadingText(loadingMessages[messageIndex]);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadComplete();
          }, 500);
        }
        
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Star Wars Logo/Title */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            YASHASHVI
          </h1>
          <p className="text-lg text-neutral-400">Developer Portfolio</p>
        </motion.div>

        {/* Lightsaber Loading Bar */}
        <div className="relative w-80 h-2 mb-6">
          <div className="absolute inset-0 bg-navy rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-aqua via-mint to-lavender"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(51, 194, 204, 0.8)'
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
          
          {/* Glowing effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-aqua/20 via-mint/20 to-lavender/20 rounded-full blur-sm"
            style={{ width: `${progress}%` }}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: 'easeInOut'
            }}
          />
        </div>

        {/* Progress Percentage */}
        <motion.div 
          className="text-2xl font-mono text-aqua mb-4"
          animate={{ 
            textShadow: [
              '0 0 5px rgba(51, 194, 204, 0.8)',
              '0 0 20px rgba(51, 194, 204, 1)',
              '0 0 5px rgba(51, 194, 204, 0.8)'
            ]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          {Math.floor(progress)}%
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-neutral-400 text-center max-w-md"
          key={loadingText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {loadingText}
        </motion.p>

        {/* Animated Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;