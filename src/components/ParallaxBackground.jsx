import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  
  // Detect mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // Reduce parallax movement on mobile for performance, but keep all layers visible
  const mountain3Y = useTransform(x, [0, 0.5], isMobile ? ["15%", "0%"] : ["30%", "0%"]);
  const planetsX = useTransform(x, [0, 0.5], isMobile ? ["-10%", "0%"] : ["-22%", "0%"]);
  const mountain2Y = useTransform(x, [0, 0.5], isMobile ? ["10%", "20%"] : ["20%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], isMobile ? ["5%", "5%"] : ["10%", "10%"]);
  
  // Fixed paths - testing direct paths
  const isDev = import.meta.env.DEV;
  const baseUrl = isDev ? '' : '/Yashashvi';
  
  // Environment detection for production optimization

  return (
    <section className="absolute inset-0 z-0 bg-black/20">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky - Enhanced for mobile visibility */}
        <div
          className="absolute inset-0 w-full h-screen"
          style={{
            backgroundImage: `url(${baseUrl}/assets/wp3614448.webp)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: '#1a1b3e', // Star Wars-like fallback color
            minHeight: '100vh',
            zIndex: -50,
            // Enhanced mobile visibility - same as desktop but brighter
            filter: isMobile ? 'brightness(1.2) contrast(1.15) saturate(1.1)' : 'brightness(1.05)',
            opacity: 1 // Ensure full visibility
          }}
        />
        
        {/* Mountain Layer 3 - Fully visible on mobile */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${baseUrl}/assets/mountain-3.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: 'rgba(26, 27, 62, 0.6)', // Less opacity for mobile
            zIndex: -40,
            y: mountain3Y,
            opacity: 1, // Ensure visibility
            filter: isMobile ? 'brightness(1.1)' : 'none'
          }}
        />
        
        {/* Planets - Fully visible on mobile */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${baseUrl}/assets/planets.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: 'rgba(30, 31, 70, 0.4)', // Less opacity for mobile
            zIndex: -30,
            x: planetsX,
            opacity: 1, // Ensure visibility
            filter: isMobile ? 'brightness(1.15)' : 'none'
          }}
        />
        
        {/* Mountain Layer 2 - Fully visible on mobile */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${baseUrl}/assets/mountain-2.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: 'rgba(35, 36, 75, 0.5)', // Less opacity for mobile
            zIndex: -20,
            y: mountain2Y,
            opacity: 1, // Ensure visibility
            filter: isMobile ? 'brightness(1.1)' : 'none'
          }}
        />
        
        {/* Mountain Layer 1 - Fully visible on mobile */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${baseUrl}/assets/mountain-1.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: 'rgba(40, 41, 80, 0.7)', // Less opacity for mobile
            zIndex: -10,
            y: mountain1Y,
            opacity: 1, // Ensure visibility
            filter: isMobile ? 'brightness(1.1)' : 'none'
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
