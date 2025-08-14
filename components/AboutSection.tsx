
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1024&auto=format&fit=crop" 
              alt="Annisys Research Lab" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              To accelerate scientific discovery and improve human health by providing researchers with the highest quality peptides and innovative life science solutions. We are committed to pushing the boundaries of what's possible in biochemical research.
            </p>
            <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-lg text-gray-300">
              We envision a world where complex diseases are understood and treated through the precision of peptide-based therapeutics. Annisys aims to be the catalyst for the next generation of medical breakthroughs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;