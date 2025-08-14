
import React from 'react';
import MoleculeIcon from './common/MoleculeIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400">
        <div className="flex justify-center items-center mb-4">
            <MoleculeIcon className="h-6 w-6 text-emerald-400 mr-2" />
            <p className="text-lg font-semibold text-white">Annisys</p>
        </div>
        <div className="mb-4">
          <p>Paul Street, London, EC2A</p>
        </div>
        <p>&copy; {new Date().getFullYear()} Annisys. All Rights Reserved.</p>
        <p className="text-sm mt-2">Pioneering the Future of Life Sciences.</p>
      </div>
    </footer>
  );
};

export default Footer;