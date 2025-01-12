import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string; // Additional Tailwind classes
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`rounded-lg shadow-lg bg-white p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
