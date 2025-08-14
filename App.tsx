
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import ResearchSection from './components/ResearchSection';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;