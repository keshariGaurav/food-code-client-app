import React from 'react';
import PropTypes from 'prop-types';

const SingleSelector = () => {
  return (
    <div>
      <h3 className="text-lg font-bold">Add on Name</h3>
      <p className="mb-2 mt-2 text-base">Select up to 1 option</p>
      <div className="p-2">
        <div className="flex justify-between">
          <div className="flex space-x-3.5">
            <img src="../../../images/veg.png" />
            <h3>Egg</h3>
          </div>
          <div className="flex space-x-3.5">
            <p>Rs. 45</p>
            <label className="custom-radio">
              <input type="radio" />
              <span></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleSelector.propTypes = {};

export default SingleSelector;
