import axios from 'axios';
import { useEffect, useState } from 'react';

import { MenuItemByCategory } from '../../types';
import SearchBar from '../InputBox/SearchBar';
import MenuByCategory from '../MenuByCategory';

const MenuItemsWrapper = () => {
  const [menuItems, setMenuItems] = useState<MenuItemByCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:3100/api/v1/menus/category');
        console.log(response.data.data);
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
    <div>
      <SearchBar />
      {menuItems.map((menuItem: MenuItemByCategory) => (
        <div key={menuItem.id} className="mt-16">
          <MenuByCategory menuItem={menuItem} />
        </div>
      ))}
    </div>
  );
};

export default MenuItemsWrapper;
