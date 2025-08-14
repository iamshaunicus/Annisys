
import { ReactNode } from 'react';

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ResearchPaper {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  imageUrl: string;
}