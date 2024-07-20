import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import AddOnWrapper from '@/Components/AddOnWrapper';
import AddButton from '@/Components/buttons/AddButton';
import NumberInput from '@/Components/InputBox/NumberInput';
import StarRating from '@/Components/StarRating';
import { addNewItem } from '@/redux/reducer/cartSlice';
import { updateItemsSelection } from '@/redux/reducer/menuPopupSlice';
import { AppDispatch, RootState } from '@/redux/store';

const MenuItemDescription = () => {
  const dispatch: AppDispatch = useDispatch();
  const popupMenuState = useSelector((state: RootState) => state.menuPopup);
  const description = popupMenuState?.data?.description;
  const name = popupMenuState?.data?.name;
  const price = popupMenuState?.data?.price;
  const totalAmount = popupMenuState.amount * popupMenuState.quantity;
  const addOnItems = popupMenuState?.data?.addOnItems;
  const newUid = uuidv4();

  const handleTotalQuantity = (value: number) => {
    dispatch(
      updateItemsSelection({
        quantity: value,
        totalAmount: value * popupMenuState.amount,
      }),
    );
  };

  useEffect(() => {
    dispatch(
      updateItemsSelection({
        quantity: 1,
        amount: price,
        totalAmount: price,
      }),
    );
  }, [popupMenuState.menuId]);

  const handleClose = () => {
    dispatch(
      updateItemsSelection({
        visible: false,
        editMode: false,
      }),
    );
  };

  const addIntoCart = () => {
    handleClose();
    dispatch(addNewItem({ cartId: newUid, item: popupMenuState }));
  };

  return (
    <div className="fixed bottom-0 h-3/5 rounded-t-3xl  bg-white">
      <div className="relative w-screen">
        <div
          onClick={handleClose}
          className="absolute"
          style={{
            top: '-35px',
            right: '42vw',
            width: '40px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <i
            style={{ fontSize: '36px', color: 'black' }}
            className="fa fa-times"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div className="z-10 h-5/6  w-screen overflow-scroll p-3">
        <div className="flex justify-between">
          <img src="../../../images/menuItem.png" alt="menu-img" />
        </div>
        <div className="mt-2 flex space-x-2">
          <img src="../../../images/non-veg.png" alt="non-veg-sign" />
          <h3 className="font-bold text-red-500">Best Seller</h3>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <h3 className="text-2xl font-bold">{name}</h3>
        </div>
        <div className="flex items-center space-x-2">
          <h3>Rs. {price}</h3>
          <StarRating rating={3} />
        </div>
        <div className="mt-2 overflow-scroll">
          <h3 className="text-gray-500">{description}</h3>
        </div>
        <div>
          {addOnItems?.map((addOns, idx) => {
            return <AddOnWrapper data={addOns} key={idx} />;
          })}
        </div>
      </div>
      <div style={{ marginTop: '5vh' }}>
        <div className="m-2 flex justify-between px-4">
          <div className="flex">
            <NumberInput handler={handleTotalQuantity} />
          </div>
          <AddButton size="large" color="primary" onClick={addIntoCart}>
            {`Add Item Rs. ${totalAmount.toFixed(2)}`}
          </AddButton>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDescription;
