import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["30%", "0%"]);
  const planetsX = useTransform(x, [0, 0.5], ["-22%", "0%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["20%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["10%", "10%"]);
  
  // Fixed paths - testing direct paths
  const isDev = import.meta.env.DEV;
  const baseUrl = isDev ? '' : '/Yashashvi';
  
  console.log('ParallaxBackground - Environment:', { isDev, baseUrl }); // Debug log

  return (
    <section className="absolute inset-0 z-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky - Test with direct URL first */}
        <div
          className="absolute inset-0 w-full h-screen"
          style={{
            backgroundImage: `url(${baseUrl}/assets/wp3614448.webp)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: '#1a1b3e', // Star Wars-like fallback color
            minHeight: '100vh',
            zIndex: -50
          }}
        />
        {/* Test element to make sure the section is visible */}
        <div className="absolute top-4 left-4 z-50 text-white bg-red-600 p-2 rounded">
          Background Test: {isDev ? 'DEV' : 'PROD'} - {baseUrl}
        </div>
        
        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${baseUrl}/assets/mountain-3.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: 'rgba(26, 27, 62, 0.8)',
            zIndex: -40,
            y: mountain3Y,
          }}
        />
        
        {/* Planets */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${baseUrl}/assets/planets.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: 'rgba(30, 31, 70, 0.6)',
            zIndex: -30,
            x: planetsX,
          }}
        />
        
        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${baseUrl}/assets/mountain-2.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: 'rgba(35, 36, 75, 0.7)',
            zIndex: -20,
            y: mountain2Y,
          }}
        />
        
        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${baseUrl}/assets/mountain-1.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: 'rgba(40, 41, 80, 0.9)',
            zIndex: -10,
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
