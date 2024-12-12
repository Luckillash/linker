import React from 'react';
import { Check } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
  index: number;
}

const PricingCard = ({ title, price, features, featured = false, index }: PricingCardProps) => {
  return (
    <div 
      className={`
        p-8 rounded-xl border hover-lift transition-all duration-300
        ${featured 
          ? 'bg-blue-900 text-white border-blue-700 ring-2 ring-blue-500' 
          : 'bg-gray-800 border-gray-700 text-white'
        }
        ${fadeInUp}
      `}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <Check className={`w-5 h-5 ${featured ? 'text-blue-300' : 'text-blue-400'}`} />
            <span className={featured ? 'text-blue-100' : 'text-gray-300'}>{feature}</span>
          </li>
        ))}
      </ul>
					<a href="https://wa.me/+56994370903">

      <button className={`
        w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300
        ${featured 
          ? 'bg-blue-400 text-gray-900 hover:bg-blue-300' 
          : 'bg-blue-600 text-white hover:bg-blue-500'
        }
      `}>
        Démosle!
      </button>

      </a>
    </div>
  );
};

export default PricingCard;