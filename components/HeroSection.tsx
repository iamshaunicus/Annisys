
import React from 'react';

const HeroSection: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative pt-48 pb-24 flex items-center justify-center text-white text-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute inset-0 bg-grid-emerald-500/[0.08] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
      </div>
      
      <div className="relative z-10 p-8 flex flex-col items-center">
         <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl opacity-20"></div>
         <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gray-500/10 rounded-full filter blur-3xl opacity-20"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-400">
          Pioneering Peptide Frontiers
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          Annisys is at the forefront of life sciences, leveraging advanced peptide synthesis and research to unlock novel therapeutic solutions.
        </p>
        <div className="flex space-x-4">
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, '#services')} 
            className="bg-emerald-600 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-600/20 cursor-pointer"
          >
            Our Services
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')} 
            className="bg-gray-700/50 border border-gray-600 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;