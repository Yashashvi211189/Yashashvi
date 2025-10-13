import React, { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import StarfieldBackground from './components/StarfieldBackground.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

// Lazy load non-critical sections to reduce initial bundle size
const About = lazy(() => import('./sections/About.jsx'));
const Resume = lazy(() => import('./sections/Resume.jsx'));
const Experience = lazy(() => import('./sections/Experience.jsx'));
const Work = lazy(() => import('./sections/Work.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));

// Section loading fallback component
const SectionFallback = ({ height = 'min-h-screen' }) => (
  <div className={`${height} flex items-center justify-center bg-primary/20`}>
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-2 border-aqua border-t-transparent rounded-full animate-spin" />
      <p className="text-neutral-400 animate-pulse">Loading section...</p>
    </div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  
  useEffect(() => {
    // Register service worker for caching
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        const baseUrl = import.meta.env.DEV ? '/' : '/Yashashvi/';
        navigator.serviceWorker.register(baseUrl + 'sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
            // Check for updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New content is available, refresh the page
                    window.location.reload();
                  }
                });
              }
            });
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
    
    // Preload critical assets
    const preloadAssets = () => {
      const baseUrl = import.meta.env.DEV ? '/' : '/Yashashvi/';
      const criticalAssets = [
        baseUrl + 'assets/wp3614448.webp', // Main background
        baseUrl + 'assets/menu.svg',
        baseUrl + 'assets/close.svg'
      ];
      
      const promises = criticalAssets.map(asset => {
        return new Promise((resolve) => {
          if (asset.endsWith('.svg')) {
            fetch(asset).then(() => resolve()).catch(() => resolve());
          } else {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = asset;
          }
        });
      });
      
      Promise.all(promises).then(() => {
        setAssetsLoaded(true);
      });
    };
    
    preloadAssets();
  }, []);
  
  useEffect(() => {
    // Mobile-specific scroll optimizations
    if (window.innerWidth < 768) {
      // Passive event listeners for better performance
      const options = { passive: true };
      
      // Improve scroll performance
      let ticking = false;
      const updateScroll = () => {
        ticking = false;
      };
      
      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScroll);
          ticking = true;
        }
      };
      
      document.addEventListener('scroll', requestTick, options);
      document.addEventListener('touchstart', () => {}, options);
      
      return () => {
        document.removeEventListener('scroll', requestTick);
        document.removeEventListener('touchstart', () => {});
      };
    }
  }, []);
  const handleLoadComplete = () => {
    console.log('Loading complete, device width:', window.innerWidth);
    setIsLoading(false);
  };
  
  // Fallback to ensure site loads even if loading screen has issues - shorter on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const fallbackTime = isMobile ? 3000 : 5000; // Shorter timeout on mobile
    
    const fallback = setTimeout(() => {
      setIsLoading(false);
    }, fallbackTime);
    
    return () => clearTimeout(fallback);
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadComplete={handleLoadComplete} />;
  }

  return (
    <ErrorBoundary>
      <div className="relative">
        {/* Global Starfield Background */}
        <StarfieldBackground />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content Container */}
        <div className="relative z-10">
        {/* Hero Section - Keep existing 3D model and animations */}
        <section id="home" className="relative">
          <Hero />
        </section>
        
        {/* About Section - Lazy load */}
        <section id="about" className="relative">
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
        </section>
        
        {/* Resume Section - Lazy load */}
        <section id="resume" className="relative">
          <Suspense fallback={<SectionFallback />}>
            <Resume />
          </Suspense>
        </section>
        
        {/* Experience Section - Lazy load */}
        <section id="experience" className="relative">
          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>
        </section>
        
        {/* Work Section - Lazy load */}
        <section id="work" className="relative">
          <Suspense fallback={<SectionFallback />}>
            <Work />
          </Suspense>
        </section>
        
        {/* Contact Section - Lazy load */}
        <section id="contact" className="relative">
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </section>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App
