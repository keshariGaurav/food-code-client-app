import React from 'react';

import { MenuItemByCategory } from '@/types';

import image from '../../../images/menuItem.png';

interface CategoriesSliderProps {
  onCategoryClick: (text: string) => void;
  menuItems: MenuItemByCategory[];
}

const CategoriesSlider = ({ onCategoryClick, menuItems }: CategoriesSliderProps) => {
  return (
    <div className="flex w-full justify-center px-4">
      <div
        className="flex w-full space-x-4 overflow-x-auto p-4 px-4 sm:w-1/2 lg:w-1/4"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          overflow: 'hidden',
        }}
      >
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            onClick={() => onCategoryClick(menuItem.category.name)}
            className="flex flex h-24 w-24 flex-none transform flex-col flex-col items-center items-center justify-center justify-center rounded-lg transition duration-300 hover:scale-110 hover:bg-red-200 hover:shadow-lg"
          >
            <img
              src={image}
              alt={menuItem.category.name}
              className="mb-2 h-16 w-16 rounded-xl object-cover"
            />
            <span className="text-center text-sm font-semibold">
              {menuItem.category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSlider;
