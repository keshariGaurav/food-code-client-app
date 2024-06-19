import axios from 'axios';
import { useEffect, useState } from 'react';

import { MenuItemByCategory } from '../../types';
import MenuByCategory from '../MenuByCategory';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import MenuItemDescription from '../MenuItemDescription';

const MenuItemsWrapper = () => {
  const [menuItems, setMenuItems] = useState<MenuItemByCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const popupMenuState = useSelector((state: RootState) => state.menuPopup);
  const isVisible = popupMenuState.visible;

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:3100/api/v1/menus/category');
        setMenuItems(response.data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div>
        {menuItems.map((menuItem: MenuItemByCategory) => (
          <div
            key={menuItem.id}
            className={`${
              isVisible ? 'z-index-1  overscroll-none bg-gray-100' : 'blue-none'
            }`}
          >
            <MenuByCategory menuItem={menuItem} />
          </div>
        ))}
      </div>
      {isVisible && <MenuItemDescription />}
    </>
  );
};

export default MenuItemsWrapper;
