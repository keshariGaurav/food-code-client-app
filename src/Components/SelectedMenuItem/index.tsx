import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MenuPopupState, AddOnItem } from '@/types';
import PopupMenu from '@/Components/PopupMenu';
import { deleteItem, updateQuantity } from '@/redux/reducer/cartSlice';
import { AppDispatch, RootState } from '@/redux/store';
import NumberInput from '@/Components/InputBox/NumberInput';

interface SelectedMenuItemProps {
  menuItem: MenuPopupState;
  id: string;
}
const SelectedMenuItem = ({ menuItem, id }: SelectedMenuItemProps) => {
  function getAddOnItemNames(popupItem: MenuPopupState): string {
    const addOnItemNames: string[] = [];
    const addOnItems = popupItem.data.addOnItems ?? [];

    addOnItems.forEach((addOnGroup: AddOnItem) => {
      addOnGroup.items.forEach((item) => {
        if (popupItem.selectedItems[addOnGroup._id].includes(item._id)) {
          addOnItemNames.push(item.name);
        }
      });
    });
    return addOnItemNames.join(', ');
  }

  const handleDelete = () => {
    dispatch(deleteItem({ cartId: id }));
  };
  const dispatch: AppDispatch = useDispatch();

  const name = menuItem.data.name;
  const quantity = menuItem.quantity;
  const selectedItems = getAddOnItemNames(menuItem);

  return (
    <div className="mt-2">
      <div className="flex  items-center justify-between">
        <div>
          <div className="mb-1 text-xl font-bold text-gray-900">{name}</div>
          <div className="mb-3 flex">
            <div className="mr-4 text-xl text-gray-900">Quantity: {quantity}</div>
            <div className="text-xl text-gray-900">
              Rs. {menuItem.totalAmount.toFixed(2)}
            </div>
          </div>
          <NumberInput
            defaultValue={quantity}
            handler={(value) => {
              dispatch(updateQuantity({ cartId: id, quantity: value }));
            }}
          />
        </div>
        <div>
          <button onClick={handleDelete}>
            <span style={{ color: '#FF5152', fontSize: '14px' }}>
              <i className="fa-lg fa-solid fa-trash"></i>
            </span>
          </button>
        </div>
      </div>
      <div className="mt-2">
        {selectedItems && (
          <>
            <div>Add On Items:</div>
            <div className="text-gray-600">{selectedItems}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectedMenuItem;
