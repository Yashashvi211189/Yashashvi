import { useState } from "react";
import { motion } from "framer-motion";

function Navigation({ onLinkClick }) {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    
    // Smooth scroll to target
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    
    // Close mobile menu if callback provided
    if (onLinkClick) {
      setTimeout(() => onLinkClick(), 100);
    }
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a 
          className="nav-link" 
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a 
          className="nav-link" 
          href="#about"
          onClick={(e) => handleLinkClick(e, 'about')}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a 
          className="nav-link" 
          href="#experience"
          onClick={(e) => handleLinkClick(e, 'experience')}
        >
          Experience
        </a>
      </li>
      <li className="nav-li">
        <a 
          className="nav-link" 
          href="#work"
          onClick={(e) => handleLinkClick(e, 'work')}
        >
          Work
        </a>
      </li>
      <li className="nav-li">
        <a 
          className="nav-link" 
          href="#contact"
          onClick={(e) => handleLinkClick(e, 'contact')}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const closeMobileMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
              closeMobileMenu();
            }}
          >
            Yashashvi
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <img
              src={isOpen ? "/star-wars-portfolio/assets/close.svg" : "/star-wars-portfolio/assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden bg-primary/90 backdrop-blur-lg border-t border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <nav className="pb-5">
            <Navigation onLinkClick={closeMobileMenu} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
