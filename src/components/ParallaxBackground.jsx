import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["30%", "0%"]);
  const planetsX = useTransform(x, [0, 0.5], ["-22%", "0%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["20%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["10%", "10%"]);
  
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [showLayers, setShowLayers] = useState(false);
  
  const imageUrls = [
    '/star-wars-portfolio/assets/wp3614448.webp',
    '/star-wars-portfolio/assets/mountain-3.png',
    '/star-wars-portfolio/assets/planets.png',
    '/star-wars-portfolio/assets/mountain-2.png',
    '/star-wars-portfolio/assets/mountain-1.png'
  ];
  
  useEffect(() => {
    // Progressive image loading
    const loadImages = async () => {
      const promises = imageUrls.map((url, index) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, url]));
            resolve(url);
          };
          img.onerror = () => resolve(url); // Still resolve to prevent blocking
          // Add delay for non-critical images to prioritize main content
          setTimeout(() => {
            img.src = url;
          }, index * 100);
        });
      });
      
      // Show layers after first image loads
      Promise.race(promises).then(() => {
        setShowLayers(true);
      });
    };
    
    loadImages();
  }, []);

  const BackgroundLayer = ({ url, className, style, isLoaded, priority = false }) => {
    if (!showLayers && !priority) return null;
    
    return (
      <motion.div
        className={className}
        style={{
          ...style,
          backgroundImage: isLoaded ? `url(${url})` : 'none',
          backgroundColor: !isLoaded ? '#030412' : 'transparent',
          willChange: 'transform'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0.1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    );
  };

  return (
    <section className="absolute inset-0 bg-primary">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky - Priority load */}
        <BackgroundLayer
          url={imageUrls[0]}
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
          isLoaded={loadedImages.has(imageUrls[0])}
          priority={true}
        />
        
        {/* Mountain Layer 3 */}
        <BackgroundLayer
          url={imageUrls[1]}
          className="absolute inset-0 -z-40"
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
          isLoaded={loadedImages.has(imageUrls[1])}
        />
        
        {/* Planets */}
        <BackgroundLayer
          url={imageUrls[2]}
          className="absolute inset-0 -z-30"
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
          isLoaded={loadedImages.has(imageUrls[2])}
        />
        
        {/* Mountain Layer 2 */}
        <BackgroundLayer
          url={imageUrls[3]}
          className="absolute inset-0 -z-20"
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
          isLoaded={loadedImages.has(imageUrls[3])}
        />
        
        {/* Mountain Layer 1 */}
        <BackgroundLayer
          url={imageUrls[4]}
          className="absolute inset-0 -z-10"
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
          isLoaded={loadedImages.has(imageUrls[4])}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
