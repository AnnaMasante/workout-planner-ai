import React from 'react';

type CardTitleProps = {
  children: React.ReactNode;
  className?: string; // Additional Tailwind classes
};

const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`text-lg font-semibold text-gray-800 ${className}`}>
      {children}
    </h2>
  );
};

export default CardTitle;
