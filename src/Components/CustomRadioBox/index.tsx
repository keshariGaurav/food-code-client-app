import React, { useState } from 'react';

interface CustomRadioBoxProps {
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  checked: boolean;
}
const CustomRadioBox = ({ handler, id, name, checked }: CustomRadioBoxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handler(event);
  };

  return (
    <label className="custom-radio">
      <input
        type="radio"
        value={id}
        name={`${id}-${name}`}
        id={`radiolist-${id}`}
        checked={checked}
        onChange={handleChange}
      />
      <span></span>
    </label>
  );
};

export default CustomRadioBox;
