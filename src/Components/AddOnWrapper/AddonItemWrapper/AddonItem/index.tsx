import React, { useState, useEffect } from 'react';

import CustomCheckbox from '@/Components/InputBox/CustomCheckbox';
import CustomRadioBox from '@/Components/InputBox/CustomRadioBox';
import { AddOnItemDetail, AddOnItem } from '@/types.d';

interface AddonItemProps {
  item: AddOnItemDetail;
  limitSize: number;
  required: boolean;
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  multiSelect: boolean;
}

const AddonItem = ({
  item,
  limitSize,
  required,
  selectedIds,
  setSelectedIds,
  multiSelect,
}: AddonItemProps) => {
  const [checked, setChecked] = useState(false);
  const updateItemsAndAmountForChecklist = (
    items: string[],
    limitSize: number,
    newItem: AddOnItemDetail,
    required: boolean,
  ): string[] => {
    const itemIndex = items.findIndex((id) => id === newItem._id);

    let updatedIds: string[] = [];
    console.log(itemIndex);

    if (itemIndex > -1) {
      // Item exists, remove it.
      updatedIds = items.filter((item) => item !== newItem._id);
      if (updatedIds.length == 0 && required) {
        const defaultIds = items[0];
        updatedIds = [...updatedIds, defaultIds];
      }
      console.log(updatedIds);
      return updatedIds;
    }
    // Item does not exist, add it and increase the amount
    updatedIds = [...items, newItem._id];
    if (limitSize && items.length == limitSize) {
      updatedIds.shift();
    } else {
      updatedIds = [...items, newItem._id];
    }

    return updatedIds;
  };

  const handleChecklistClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = updateItemsAndAmountForChecklist(
      selectedIds,
      limitSize,
      item,
      required,
    );
    setSelectedIds(result);
  };

  useEffect(() => {
    if (selectedIds.includes(item._id)) setChecked(true);
    else setChecked(false);
  }, [selectedIds]);

  return (
    <div className="p-2">
      <div className="flex justify-between">
        <div className="flex space-x-3.5">
          <img src="../../../images/veg.png" />
          <h3>{item.name}</h3>
        </div>
        <div className="flex space-x-3.5">
          <p>Rs. {item.price}</p>
          {(multiSelect || (!multiSelect && !required)) && (
            <CustomCheckbox
              handler={handleChecklistClick}
              checked={checked}
              id={item._id}
              name="menu-item"
            />
          )}
          {!multiSelect && required && (
            <CustomRadioBox
              handler={handleChecklistClick}
              checked={checked}
              id={item._id}
              name="menu-item"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddonItem;
