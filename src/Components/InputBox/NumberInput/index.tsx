import React, { useEffect, useState } from 'react';

interface NumberInputProps {
  min?: number;
  max?: number;
  step?: number;
  handler: (param: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
  min = 1,
  max = 10,
  step = 1,
  handler,
}) => {
  const [value, setValue] = useState<number>(min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
    }
  };

  const increment = () => {
    if (value + step <= max) {
      setValue(value + step);
    }
  };

  const decrement = () => {
    if (value - step >= min) {
      setValue(value - step);
    }
  };

  useEffect(() => {
    handler(value);
  }, [value]);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={decrement}
        className="rounded-md bg-gray-200 px-2 py-1 hover:bg-gray-300"
        disabled={value <= min}
      >
        -
      </button>
      <input
        type="number"
        value={value}
        readOnly={true}
        onChange={handleChange}
        className="w-20 rounded-md border border-gray-300 text-center"
        min={min}
        max={max}
        step={step}
      />
      <button
        onClick={increment}
        className="rounded-md bg-gray-200 px-2 py-1 hover:bg-gray-300"
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
};

export default NumberInput;
