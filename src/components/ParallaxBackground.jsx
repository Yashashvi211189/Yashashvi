import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["30%", "0%"]);
  const planetsX = useTransform(x, [0, 0.5], ["-22%", "0%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["20%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["10%", "10%"]);
  
  // Simplified - show background immediately
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  console.log('BASE_URL:', import.meta.env.BASE_URL); // Debug log

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: `url(${baseUrl}assets/wp3614448.webp)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        
        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: `url(${baseUrl}assets/mountain-3.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />
        
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: `url(${baseUrl}assets/planets.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        
        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `url(${baseUrl}assets/mountain-2.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />
        
        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${baseUrl}assets/mountain-1.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
