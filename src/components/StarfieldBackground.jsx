import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const StarfieldBackground = () => {
  const [stars, setStars] = useState([]);
  const [nebulaClouds, setNebulaClouds] = useState([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 150; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleDelay: Math.random() * 5,
          twinkleDuration: Math.random() * 3 + 2,
        });
      }
      setStars(starArray);
    };

    // Generate nebula clouds
    const generateNebulae = () => {
      const nebulaArray = [];
      for (let i = 0; i < 8; i++) {
        nebulaArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 40 + 20,
          opacity: Math.random() * 0.1 + 0.05,
          color: i % 3 === 0 ? 'from-aqua/10' : i % 3 === 1 ? 'from-lavender/10' : 'from-mint/10',
          drift: Math.random() * 20 + 10,
          driftDelay: Math.random() * 10,
        });
      }
      setNebulaClouds(nebulaArray);
    };

    generateStars();
    generateNebulae();
  }, []);

  const ShootingStar = ({ delay }) => (
    <motion.div
      className="absolute w-1 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
      initial={{ 
        x: -100, 
        y: Math.random() * window.innerHeight,
        opacity: 0 
      }}
      animate={{
        x: window.innerWidth + 100,
        y: Math.random() * window.innerHeight + 200,
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 15 + 10,
        ease: "linear"
      }}
    />
  );

  const MovingStar = ({ delay }) => (
    <motion.div
      className="absolute w-px h-20 bg-gradient-to-b from-transparent via-aqua/60 to-transparent"
      initial={{ 
        x: Math.random() * window.innerWidth,
        y: -100 
      }}
      animate={{
        y: window.innerHeight + 100
      }}
      transition={{
        duration: Math.random() * 8 + 5,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 20,
        ease: "linear"
      }}
    />
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-midnight to-navy"></div>
      
      {/* Deep space nebula gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-indigo/5 to-storm/10"></div>
      
      {/* Nebula clouds */}
      {nebulaClouds.map((cloud) => (
        <motion.div
          key={`nebula-${cloud.id}`}
          className={`absolute rounded-full bg-gradient-radial ${cloud.color} to-transparent blur-3xl`}
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            width: `${cloud.size}vw`,
            height: `${cloud.size}vh`,
            opacity: cloud.opacity,
          }}
          animate={{
            x: [-cloud.drift, cloud.drift, -cloud.drift],
            y: [-cloud.drift/2, cloud.drift/2, -cloud.drift/2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: cloud.drift,
            delay: cloud.driftDelay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Static stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.twinkleDuration,
            delay: star.twinkleDelay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {[...Array(3)].map((_, index) => (
        <ShootingStar key={`shooting-${index}`} delay={index * 5} />
      ))}

      {/* Moving vertical stars (hyperspace effect) */}
      {[...Array(8)].map((_, index) => (
        <MovingStar key={`moving-${index}`} delay={index * 2} />
      ))}

      {/* Distant galaxy glow */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-radial from-lavender/5 via-royal/3 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-mint/5 via-aqua/3 to-transparent rounded-full blur-3xl"></div>
      
      {/* Cosmic dust particles */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, rgba(51, 194, 204, 0.1), transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(122, 87, 219, 0.1), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(87, 219, 150, 0.1), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(202, 47, 140, 0.1), transparent),
            radial-gradient(1px 1px at 160px 30px, rgba(51, 194, 204, 0.1), transparent)
          `,
          backgroundSize: "200px 100px",
          opacity: 0.3
        }}
      />
      
      {/* Subtle scan lines for holographic effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          backgroundPosition: ["0 0", "0 100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: "linear-gradient(90deg, transparent 98%, rgba(51, 194, 204, 0.02) 100%)",
          backgroundSize: "3px 100%",
        }}
      />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-primary/30"></div>
    </div>
  );
};

export default StarfieldBackground;