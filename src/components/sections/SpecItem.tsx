import React, { ReactNode } from 'react';
import { slideInRight } from '../../utils/animations';

interface SpecItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

const SpecItem = ({ icon, title, description, index }: SpecItemProps) => {
  return (
    <div 
      className={`flex items-start gap-4 ${slideInRight}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="text-blue-400 transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default SpecItem;