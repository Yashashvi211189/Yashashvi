import React from 'react';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Work from './sections/Work.jsx';
import Contact from './sections/Contact.jsx';
import StarfieldBackground from './components/StarfieldBackground.jsx';

const App = () => {
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
        <About />
        
        {/* Experience Section */}
        <Experience />
        
        {/* Work Section */}
        <Work />
        
        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
};

export default App
