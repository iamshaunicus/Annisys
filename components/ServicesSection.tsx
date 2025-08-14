
import React from 'react';
import { Service } from '../types';
import MoleculeIcon from './common/MoleculeIcon';
import BeakerIcon from './common/BeakerIcon';
import DnaIcon from './common/DnaIcon';

const services: Service[] = [
  {
    title: 'Custom Peptide Synthesis',
    description: 'High-purity, custom-sequence peptides tailored to your specific research needs, from small scale to bulk quantities.',
    icon: <MoleculeIcon className="w-10 h-10 text-emerald-400 mb-4" />
  },
  {
    title: 'Peptide Libraries',
    description: 'Creation of diverse peptide libraries for high-throughput screening and drug discovery applications.',
    icon: <DnaIcon className="w-10 h-10 text-emerald-400 mb-4" />
  },
  {
    title: 'Peptide Analysis & Purification',
    description: 'Comprehensive analytical services including HPLC and Mass Spectrometry to ensure peptide purity and characterization.',
    icon: <BeakerIcon className="w-10 h-10 text-emerald-400 mb-4" />
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32">
       <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Our Services</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Providing comprehensive solutions to accelerate your research from concept to discovery.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-emerald-600/20">
              {service.icon}
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;