
import React from 'react';
import { ResearchPaper } from '../types';

const researchData: ResearchPaper[] = [
  {
    id: 1,
    title: 'Novel GLP-1R Agonists for Glycemic Control in Type 2 Diabetes',
    authors: ['Chen, L.', 'Rodriguez, M.', 'Patel, S.'],
    journal: 'Journal of Medicinal Chemistry',
    year: 2023,
    abstract: 'This study presents the design, synthesis, and pharmacological evaluation of a new series of long-acting GLP-1 receptor agonists. The lead compound, AN-387, demonstrates superior glycemic control and reduced side effects compared to existing therapies in preclinical models, suggesting its potential as a next-generation treatment for type 2 diabetes.',
    imageUrl: 'https://images.unsplash.com/photo-1681911046064-e663d5192921?q=80&w=2621&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Peptide-Based Inhibitors of the p53-MDM2 Interaction for Cancer Therapy',
    authors: ['Williams, J.', 'Ito, H.', 'Garcia, A.'],
    journal: 'Cell Chemical Biology',
    year: 2024,
    abstract: 'Reactivating the p53 tumor suppressor by inhibiting its interaction with MDM2 is a promising anti-cancer strategy. We developed a stapled peptide, AN-p53i, that binds to MDM2 with high affinity and specificity. In xenograft models of colon cancer, AN-p53i treatment led to significant tumor regression and p53 pathway activation, validating its therapeutic potential.',
    imageUrl: 'https://images.unsplash.com/photo-1624957485560-47747511b32f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
   {
    id: 3,
    title: 'Development of a Peptide-Based Hydrogel for Enhanced Wound Healing',
    authors: ['Singh, R.', 'Davis, K.', 'Al-Jamil, F.'],
    journal: 'Biomaterials Science',
    year: 2023,
    abstract: 'Peptide-based hydrogels are emerging as promising biomaterials for tissue regeneration. This study describes the synthesis and characterization of a self-assembling peptide that forms a stable hydrogel. In vivo studies in a murine model demonstrated that the hydrogel significantly accelerates wound closure and tissue regeneration compared to standard treatments, highlighting its potential in clinical applications for wound care.',
    imageUrl: 'https://images.unsplash.com/photo-1649073586428-e288125d930a?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const ResearchCard: React.FC<{ paper: ResearchPaper }> = ({ paper }) => {
  return (
    <div className="bg-gray-900/50 rounded-lg overflow-hidden shadow-lg hover:shadow-emerald-500/20 transition-shadow duration-300 flex flex-col">
      <img src={paper.imageUrl} alt={paper.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{paper.title}</h3>
        <p className="text-sm text-gray-400 mb-1">{paper.authors.join(', ')}</p>
        <p className="text-sm text-emerald-400 font-medium mb-4">{paper.journal}, {paper.year}</p>
        <p className="text-gray-300 text-base flex-grow">{paper.abstract}</p>
      </div>
    </div>
  );
};


const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Featured Research</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Explore our latest publications and see how we're advancing the field of life sciences.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchData.map(paper => (
            <ResearchCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;