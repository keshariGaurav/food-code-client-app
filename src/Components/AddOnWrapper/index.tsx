import React from 'react';

import AddonItemWrapper from '@/Components/AddOnWrapper/AddonItemWrapper';
import { AddOnItem } from '@/types';
interface AddOnWrapperProps {
  data: AddOnItem;
}
const AddOnWrapper = ({ data }: AddOnWrapperProps) => {
  const name = data.name;
  const multiSelect = data.multiSelect;
  const required = data.required;
  const items = data.items ?? [];

  return (
    <div className="mt-4 text-xl">
      <div className="text-xl font-medium">{name}</div>
      <AddonItemWrapper
        data={items}
        limitSize={multiSelect == false ? 1 : data.limitSize}
        required={required}
        addOnId={data._id}
        multiSelect={multiSelect}
      />
    </div>
  );
};

AddOnWrapper.propTypes = {};

export default AddOnWrapper;
