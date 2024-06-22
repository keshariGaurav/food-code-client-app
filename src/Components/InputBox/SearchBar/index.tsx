import React, { useState, useCallback } from 'react';
import { debounce } from '@/utils/debounce';

interface SearchBarProps {
  handler: (text: string) => void;
}

const SearchBar = ({ handler }: SearchBarProps) => {
  const [text, setText] = useState('');

  const debouncedHandleInputChange = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      handler(event.target.value);
    }, 500),
    [],
  );
  return (
    <div className="flex w-full justify-center px-4">
      <div className="relative mb-2 flex w-full items-center justify-center sm:w-1/2 lg:w-1/4">
        <input
          className="mb-3 block w-full appearance-none rounded-2xl border border-gray-300 bg-green-50 px-4 py-3 leading-tight text-gray-700 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-100"
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            debouncedHandleInputChange(event);
          }}
          placeholder="Search cuisines or food items"
        />
        <button className="absolute right-3 top-1/3 mt-1 -translate-y-1/2 transform p-2 transition-transform duration-200 ease-in-out hover:scale-105 hover:transform">
          <i className="fa-solid fa-magnifying-glass text-gray-700"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
