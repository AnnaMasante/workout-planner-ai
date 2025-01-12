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
      <label className="mb-2 font-semibold">{label}</label>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
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
