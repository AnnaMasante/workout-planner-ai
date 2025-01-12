import React from "react";

type ChartContainerProps = {
  children: React.ReactNode;
  config: Record<string, { label: string; color: string }>;
  className?: string; // Classes CSS optionnelles
};

const ChartContainer: React.FC<ChartContainerProps> = ({ children, config, className = "" }) => {
  return (
    <div className={`relative bg-gray-100 p-4 rounded-md shadow-md ${className}`}>
      <div className="absolute inset-0 -z-10" style={{ background: "var(--chart-background)" }} />
      <div className="absolute inset-y-0 left-0 w-[4px] bg-gradient-to-b from-blue-500 to-blue-700" />
      {children}
    </div>
  );
};

export default ChartContainer;
