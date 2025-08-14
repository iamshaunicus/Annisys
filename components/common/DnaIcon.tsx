
import React from 'react';

const DnaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 15c6.667-6 13.333 0 20-8" />
    <path d="M20 21c-6.667 6-13.333 0-20 8" />
    <path d="m10 4-2 2" />
    <path d="m14 8-2 2" />
    <path d="m4 10-2 2" />
    <path d="m18 12-2 2" />
    <path d="m6 16-2 2" />
    <path d="m12 18-2 2" />
  </svg>
);

export default DnaIcon;