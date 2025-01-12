import React, { useState } from "react";

// Définition des types pour les options du select
interface SelectProps {
  options: string[];
  label: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, label, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div className="flex flex-col">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="p-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
