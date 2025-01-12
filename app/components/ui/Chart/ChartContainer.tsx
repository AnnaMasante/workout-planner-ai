import React from "react";

type ChartContainerProps = {
  children: React.ReactNode;
  config: Record<string, { label: string; color: string }>;
  className?: string; // Classes CSS optionnelles
};

const ChartContainer: React.FC<ChartContainerProps> = ({
  children,
  config,
  className = "",
}) => {
  const gradients = Object.values(config)
    .map(({ color }) => color)
    .join(", ");
  return (
    <div
      className={`relative bg-gray-100 p-4 rounded-md shadow-md ${className}`}
    >
      {/* Dégradé dynamique basé sur le config */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(90deg, ${gradients})`,
        }}
      />
      {/* Barre latérale avec un dégradé basé sur la première entrée du config */}
      <div
        className="absolute inset-y-0 left-0 w-[4px]"
        style={{
          background: Object.values(config)[0]?.color || "blue",
        }}
      />
      {/* Affichage des libellés issus du config */}
      <div className="absolute top-2 left-8 text-sm font-medium text-gray-700">
        {Object.entries(config).map(([key, { label }]) => (
          <div key={key} className="mb-1">
            <span>{label}</span>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default ChartContainer;
