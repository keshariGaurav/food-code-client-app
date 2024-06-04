import React from 'react';
import PropTypes from 'prop-types';
import AddButton from '../AddButton';
import StarRating from '../StarRating';

const MenuItemDescription = () => {
  return (
    <div>
      <img src="../../../images/menuItem.png" />
      <div className="mt-2 flex space-x-2">
        <img src="../../../images/non-veg.png" />
        <h3 className="font-bold text-red-500">Best Seller</h3>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3>Masala Dosa ( With cruchy base and tangy sambhar )</h3>
        <div>
          <AddButton>Add</AddButton>
          <h3 className="mt-1 text-gray-500">Customizable</h3>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <h3>Rs. 55</h3>
        <StarRating rating={3} />
      </div>
      <div className="mt-2">
        <h3 className="text-gray-500">
          Our best-selling Masala Dosa, with a crunch base, mashed potatoes, and cottage
          cheese blended with our distinctive spices and vegetables, and our tangy
          sambhar.
        </h3>
      </div>
    </div>
  );
};

MenuItemDescription.propTypes = {};

export default MenuItemDescription;
