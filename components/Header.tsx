
import React, { useState, useEffect } from 'react';
import MoleculeIcon from './common/MoleculeIcon';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false); // Close menu after clicking a link
  };
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm shadow-md shadow-emerald-500/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-2">
              <MoleculeIcon className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold text-white tracking-wider">
                Annisys
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')} 
              className="hidden md:inline-block bg-emerald-600 text-white font-bold py-2 px-4 rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Get in Touch
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open main menu">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-950 z-[100] flex flex-col items-center justify-center space-y-10 animate-fade-in">
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="absolute top-5 right-5 text-gray-400 hover:text-white" 
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-medium text-gray-300 hover:text-emerald-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
           <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')} 
            className="bg-emerald-600 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      )}
    </>
  );
};

export default Header;