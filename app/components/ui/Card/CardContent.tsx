import React from 'react';

type CardContentProps = {
  children: React.ReactNode;
  className?: string; // Additional Tailwind classes
};

const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return <div className={`text-gray-700 ${className}`}>{children}</div>;
};

export default CardContent;
