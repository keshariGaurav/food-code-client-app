import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItem } from '@/redux/reducer/cartSlice';
import { updateItemsSelection } from '@/redux/reducer/menuPopupSlice';
import { AppDispatch, RootState } from '@/redux/store';
import SelectedMenuItem from '@/Components/SelectedMenuItem';

const PopupMenu = () => {
  const dispatch: AppDispatch = useDispatch();
  const popupMenuState = useSelector((state: RootState) => state.menuPopup);
  const cartState = useSelector((state: RootState) => state.cart);
  const allSelectedItems = cartState.items;

  const handleClose = () => {
    dispatch(
      updateItemsSelection({
        visible: false,
      }),
    );
  };

  const addNewCustomization = () => {
    dispatch(
      updateItemsSelection({
        editMode: true,
      }),
    );
  };

  return (
    <div className="fixed bottom-0 h-2/5  rounded-t-3xl bg-white">
      <div className="relative w-screen">
        <div
          className="absolute"
          onClick={handleClose}
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
        <div className="flex flex-col justify-between">
          <div className="prose">
            <h2 className="mt-2 border-b-2 pb-2 text-center">
              Repeat last used customization?
            </h2>
            {Object.keys(allSelectedItems).map((key) => {
              const item = allSelectedItems[key];
              if (popupMenuState.menuId === item.menuId)
                return <SelectedMenuItem menuItem={item} id={key} />;
              return <></>;
            })}
          </div>
          <div className="mt-4">
            <button
              className="ml-auto mr-auto flex w-4/5 justify-center border border-custom-green-600 bg-custom-green-500 py-2 text-white"
              onClick={addNewCustomization}
            >
              Add New Customization
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
