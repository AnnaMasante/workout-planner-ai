import React from 'react';

type CardHeaderProps = {
  children: React.ReactNode;
  className?: string; // Additional Tailwind classes
};

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  return <div className={`border-b pb-2 mb-4 ${className}`}>{children}</div>;
};

export default CardHeader;
