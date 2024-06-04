import React from 'react';
import PropTypes from 'prop-types';

const MultiSelector = () => {
  return (
    <div>
      <h3 className="text-lg font-bold">Add on Name</h3>
      <p className="mb-2 mt-2 text-base">Select up to 6 options</p>
      <div className="p-2">
        <div className="flex justify-between">
          <div className="flex space-x-3.5">
            <img src="../../../images/veg.png" />
            <h3>Egg</h3>
          </div>
          <div className="flex space-x-3.5">
            <p>Rs. 45</p>
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

MultiSelector.propTypes = {};

export default MultiSelector;
