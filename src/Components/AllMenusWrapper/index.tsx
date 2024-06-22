import axios from 'axios';
import { useEffect, useState } from 'react';

import { MenuItemByCategory } from '@/types';
import SearchBar from '@/Components/InputBox/SearchBar';
import MenuByCategory from '@/Components/MenuByCategory';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import MenuItemDescription from '@/Components/MenuItemDescription';

const AllMenusWrapper = () => {
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

  if (loading) return <div key="loading">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div>
        <div className="mb-20">
          <div className="fixed left-0 right-0 top-0 z-20 bg-white pt-2">
            <SearchBar />
          </div>
        </div>
        {menuItems.map((menuItem: MenuItemByCategory, index) => (
          <div
            key={index}
            className={`${isVisible ? 'z-index-1 overscroll-none' : 'blur-none'}`}
          >
            <MenuByCategory menuItem={menuItem} key={menuItem.id} />
          </div>
        ))}
      </div>
      {isVisible && <MenuItemDescription />}
    </>
  );
};

export default AllMenusWrapper;
