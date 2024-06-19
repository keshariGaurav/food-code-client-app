import React, { useState } from 'react';

interface CustomCheckboxProps {
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  checked: boolean;
}
const CustomCheckbox = ({ handler, id, name, checked }: CustomCheckboxProps) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handler(event);
  };

  return (
    <label className="custom-checkbox" htmlFor={`checkbox-${id}`}>
      <input
        type="checkbox"
        value={id}
        name={name}
        id={`checkbox-${id}`}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span></span>
    </label>
  );
};

export default CustomCheckbox;
