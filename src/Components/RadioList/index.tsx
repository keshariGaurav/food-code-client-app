import React, { useState } from 'react';

interface RadioListProps {
  options: { value: string; label: string }[];
  name: string;
  onChange?: (value: string) => void;
}

const RadioList: React.FC<RadioListProps> = ({ options, name, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {options.map((option, index) => (
        <label key={index} className="custom-radio inline-flex items-center">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleChange}
            className="form-radio h-4 w-4 text-blue-600"
          />
          <span className="ml-2 text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioList;
