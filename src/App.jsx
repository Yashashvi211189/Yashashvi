import React, { useEffect } from 'react';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Work from './sections/Work.jsx';
import Contact from './sections/Contact.jsx';
import StarfieldBackground from './components/StarfieldBackground.jsx';

const App = () => {
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
  return (
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
        
        {/* About Section */}
        <section id="about" className="relative">
          <About />
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="relative">
          <Experience />
        </section>
        
        {/* Work Section */}
        <section id="work" className="relative">
          <Work />
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="relative">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App
