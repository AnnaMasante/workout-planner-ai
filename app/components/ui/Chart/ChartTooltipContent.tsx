import React from "react";

type ChartTooltipContentProps = {
  label?: string;
  value?: number;
};

const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({
  label,
  value,
}) => {
  return (
    <div className="flex flex-col text-gray-800">
      <span className="font-bold text-gray-600">{label}</span>
      <span className="text-sm">Valeur: {value}</span>
    </div>
  );
};

export default ChartTooltipContent;
