import React, { ReactNode } from 'react';
import { fadeInUp } from '../utils/animations';

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

const Feature = ({ icon, title, description, index }: FeatureProps) => {
  return (
    <div 
      className={`p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover-lift ${fadeInUp}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="mb-4 text-blue-400 transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Feature;