import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/Components/buttons/AddButton';
import MenuItem from '@/Components/MenuItem';
import { setPopup } from '@/redux/reducer/menuPopupSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { MenuItems } from '@/types';

import image from '../../food.png';

interface MenuItemWrapperProps {
  menu: MenuItems;
}

const MenuItemWrapper = ({ menu }: MenuItemWrapperProps) => {
  const [viewDetails, setViewDetails] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const categoryId = menu.categoryId;
  const menuId = menu._id;

  return (
    <>
      <div className="mb-2 mt-2 flex items-center justify-center p-4">
        <div className="flex w-full flex-col rounded-xl border-2 border-gray-200 p-4 sm:w-1/2 lg:w-1/4">
          <div className="flex flex-row">
            <div className="mr-10 flex flex-col items-center justify-center">
              <img src={image} alt="Food" className="rounded-md" />
              <Button
                className="-mt-2"
                onClick={() => {
                  setViewDetails(true);
                  dispatch(
                    setPopup({
                      data: menu,
                      visible: true,
                      menuId: menuId,
                      categoryId: categoryId,
                      selectedItems: {},
                      selectedItemsAmount: {},
                      totalAmount: 0,
                      amount: 0,
                      quantity: 0,
                    }),
                  );
                }}
              >
                ADD
              </Button>
              <p className="p-1 text-sm text-gray-500">Customisable</p>
            </div>
            <MenuItem menu={menu} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItemWrapper;
