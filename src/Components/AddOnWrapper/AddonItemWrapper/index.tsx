import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AddOnItemDetail } from '@/types';
import AddonItem from '@/Components/AddOnWrapper/AddonItemWrapper/AddonItem';
import { AppDispatch, RootState } from '@/redux/store';
import {
  updateItemsSelection,
  updateSelectedItems,
  updateSelectedAmount,
} from '@/redux/reducer/menuPopupSlice';

interface AddonItemWrapperProps {
  data: AddOnItemDetail[];
  limitSize: number;
  required: boolean;
  addOnId: string;
  multiSelect: boolean;
}
const AddonItemWrapper = ({
  data,
  limitSize,
  required,
  addOnId,
  multiSelect,
}: AddonItemWrapperProps) => {
  const dispatch: AppDispatch = useDispatch();
  const popupMenuState = useSelector((state: RootState) => state.menuPopup);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handlePriceUpdate = () => {
    const amount = data.reduce((sum, item) => {
      const price = item.price;
      if (selectedIds.includes(item._id)) return sum + price;
      else return sum;
    }, 0);

    dispatch(
      updateSelectedItems({
        key: addOnId,
        items: selectedIds,
      }),
    );
    dispatch(
      updateSelectedAmount({
        key: addOnId,
        amount: amount,
      }),
    );
  };

  useEffect(() => {
    handlePriceUpdate();
  }, [selectedIds]);

  useEffect(() => {
    const sumAmount = Object.values(popupMenuState.selectedItemsAmount).reduce(
      (sum, value) => {
        return sum + value;
      },
      0,
    );
    const menuPrice = popupMenuState.data.price ?? 0;
    dispatch(
      updateItemsSelection({
        amount: sumAmount + menuPrice,
        totalAmount: popupMenuState.quantity * (menuPrice + sumAmount),
      }),
    );
  }, [popupMenuState.selectedItemsAmount[addOnId]]);

  useEffect(() => {
    if (required) {
      setSelectedIds([data[0]._id]);
    }
  }, []);

  return (
    <div>
      <div className="flex gap-1">
        {required && <p className="mb-2 mt-2 text-base">Required:</p>}
        {limitSize && (
          <p className="mb-2 mt-2 text-base">Select up to {limitSize} options</p>
        )}
      </div>
      {data.map((item) => {
        return (
          <AddonItem
            item={item}
            key={item._id}
            limitSize={limitSize}
            required={required}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            multiSelect={multiSelect}
          />
        );
      })}
    </div>
  );
};
export default AddonItemWrapper;
