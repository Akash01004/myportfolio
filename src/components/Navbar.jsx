import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-accent">
          MyPortfolio
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-text-primary hover:text-accent transition-colors">Home</a>
          <a href="#about" className="text-text-primary hover:text-accent transition-colors">About</a>
          <a href="#services" className="text-text-primary hover:text-accent transition-colors">Services</a>
          <a href="#projects" className="text-text-primary hover:text-accent transition-colors">Projects</a>
          <a href="#certifications" className="text-text-primary hover:text-accent transition-colors">Certifications</a>
          <a href="#contact" className="text-text-primary hover:text-accent transition-colors">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-text-primary focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-primary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-accent hover:bg-secondary" onClick={toggleMenu}>Home</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-accent hover:bg-secondary" onClick={toggleMenu}>About</a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-accent hover:bg-secondary" onClick={toggleMenu}>Services</a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-accent hover:bg-secondary" onClick={toggleMenu}>Projects</a>
            <a href="#certifications" className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-accent hover:bg-secondary" onClick={toggleMenu}>Certifications</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-accent hover:bg-secondary" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
