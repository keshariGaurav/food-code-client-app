import { useState } from 'react';
import image from '../../food.png';
import { MenuItems } from '../../types';
import Button from '../AddButton';
import MenuItem from '../MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { setPopup } from '../../redux/reducer/menuPopupSlice';

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
      <div className="mb-2 mt-2 flex items-center justify-center">
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
              <p className="p-1 text-xs text-gray-500">Customisable</p>
            </div>
            <MenuItem menu={menu} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItemWrapper;
