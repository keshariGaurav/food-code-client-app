import React from 'react';
import PropTypes from 'prop-types';
import { AddOnItemDetail } from '../../types';
import RadioListComponent from '../CustomRadioBox';

interface SingleSelectorProps {
  data: AddOnItemDetail[];
}

const SingleSelector = ({ data }: SingleSelectorProps) => {
  return (
    <div>
      <p className="mb-2 mt-2 text-base">Select up to 1 option</p>
      {data.map((item) => {
        return (
          <div className="p-2">
            <div className="flex justify-between">
              <div className="flex space-x-3.5">
                <img src="../../../images/veg.png" />
                <h3>{item.name}</h3>
              </div>
              <div className="flex space-x-3.5">
                <p>Rs. {item.price}</p>
                <RadioListComponent id={item._id} name={item.name} handler={() => {}} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

SingleSelector.propTypes = {};

export default SingleSelector;
