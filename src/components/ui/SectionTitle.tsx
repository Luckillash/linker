import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h1 className="text-3xl font-bold text-center mb-16 text-white">
      {children}
    </h1>
  );
};

export default SectionTitle;