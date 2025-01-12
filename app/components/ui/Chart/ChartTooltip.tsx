/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TooltipProps } from "recharts";

type ChartTooltipProps = TooltipProps<any, any> & {
  content: React.ReactNode; // Contenu personnalisé
};

const ChartTooltip: React.FC<ChartTooltipProps> = ({
  content,
  active,
  payload,
}) => {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return <div className="rounded-md bg-white p-2 shadow-md">{content}</div>;
};

export default ChartTooltip;
